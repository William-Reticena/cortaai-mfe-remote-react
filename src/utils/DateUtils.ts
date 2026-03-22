export class DateUtils {
  static formatTime(time: string): string {
    const [hour, minute] = time.split(':');
    const date = new Date();
    date.setHours(Number(hour));
    date.setMinutes(Number(minute));

    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  static formatDateTime(dateTime: Date): string {
    return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }
}
