import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Kết hợp các class names và tối ưu hóa chúng với tailwind-merge
 * @param inputs - Danh sách các class names cần kết hợp
 * @returns Chuỗi class names đã được tối ưu
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format một số thành chuỗi tiền tệ
 * @param value - Số tiền cần format
 * @param currency - Đơn vị tiền tệ (mặc định: 'USD')
 * @returns Chuỗi tiền tệ đã được format
 */
export function formatCurrency(value: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value)
}

/**
 * Format một ngày thành chuỗi theo định dạng mong muốn
 * @param date - Đối tượng Date cần format
 * @param locale - Locale cho việc format (mặc định: 'en-US')
 * @returns Chuỗi ngày đã được format
 */
export function formatDate(date: Date, locale: string = 'en-US'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

/**
 * Tạo slug từ một chuỗi
 * @param str - Chuỗi cần chuyển thành slug
 * @returns Chuỗi slug
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Rút gọn một chuỗi với số ký tự tối đa
 * @param str - Chuỗi cần rút gọn
 * @param maxLength - Độ dài tối đa
 * @returns Chuỗi đã được rút gọn
 */
export function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength) + '...'
} 