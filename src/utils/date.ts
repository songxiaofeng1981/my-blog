const WEEKDAYS = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

/**
 * 把日期格式化为中文习惯：2026年06月25日 星期四
 * 使用 UTC getters，因为 frontmatter 的 `z.coerce.date()` 把日期串解析为 UTC 零点，
 * 本机时区 (CST+0800) 下用本地 getter 会让日期/星期错位。
 */
export function formatDateZh(input: Date | string | number): string {
  const d = input instanceof Date ? input : new Date(input);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  const w = WEEKDAYS[d.getUTCDay()];
  return `${y}年${m}月${day}日 ${w}`;
}
