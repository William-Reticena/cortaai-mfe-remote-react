import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'primereact/resources/themes/saga-orange/theme.css';

type MountProps = {
  container: HTMLElement;
};

let root: ReactDOM.Root | null = null;

export function mount({ container }: MountProps) {
  if (root) return;

  root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

export function unmount() {
  if (root) {
    root.unmount();
    root = null;
  }
}
