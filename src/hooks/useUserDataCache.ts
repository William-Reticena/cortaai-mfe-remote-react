import { useEffect, useState } from 'react';

interface MeResponse {
  nmUser: string;
  dsPhone: string;
  dsEmail: string;
  tpRole: number;
}

let userDataCacheService: any = null;

const loadService = async () => {
  if (userDataCacheService) {
    console.log('✅ [useUserDataCache] Service já estava carregado');
    return userDataCacheService;
  }

  try {
    console.log('⏳ [useUserDataCache] Carregando serviço do Host...');

    // Tenta carregar em modo dev (global)
    if ((window as any).__REACT_APP_BRIDGE__) {
      console.log('✅ [useUserDataCache] Serviço carregado do window (modo DEV)');
      userDataCacheService = (window as any).__REACT_APP_BRIDGE__.userDataCacheService;
      return userDataCacheService;
    }

    // Tenta carregar via Module Federation (modo produção)
    const module = await import('react-app/bridge');
    userDataCacheService = module.userDataCacheService;
    console.log('✅ [useUserDataCache] Serviço carregado via Module Federation (modo PROD)');
    return userDataCacheService;
  } catch (error) {
    console.error('❌ [useUserDataCache] Falha ao carregar serviço:', error);
    return null;
  }
};

export const useUserDataCache = () => {
  const [userData, setUserData] = useState<MeResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeCache = async () => {
      console.log('📍 [useUserDataCache] Component montado');
      const service = await loadService();

      if (!service) {
        console.warn('⚠️ [useUserDataCache] Serviço não disponível');
        setIsLoading(false);
        return;
      }

      const cachedData = service.getUserData();
      console.log('📦 [useUserDataCache] Dados do cache:', cachedData);
      setUserData(cachedData);
      setIsLoading(false);

      const unsubscribe = service.onUserDataUpdate((data: MeResponse) => {
        console.log('🔄 [useUserDataCache] Dados atualizados:', data);
        setUserData(data);
      });

      const unsubscribeClear = service.onCacheCleared(() => {
        console.log('🗑️ [useUserDataCache] Cache limpo');
        setUserData(null);
      });

      return () => {
        console.log('🚪 [useUserDataCache] Component desmontado');
        unsubscribe();
        unsubscribeClear();
      };
    };

    initializeCache();
  }, []);

  return { userData, isLoading };
};
