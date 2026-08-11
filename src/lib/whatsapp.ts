import { siteConfig } from '@/config/site';
import { LeadFormData } from '@/types';

export function formatWhatsAppNumber(phone: string): string {
  // Clean non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('0')) {
    return '60' + cleaned.slice(1);
  }
  return cleaned;
}

export function buildWhatsAppUrl(
  customMessage?: string,
  leadData?: Partial<LeadFormData>
): string {
  const number = formatWhatsAppNumber(siteConfig.whatsappNumber);
  
  let text = customMessage || siteConfig.whatsappDefaultMessage;

  if (leadData && (leadData.industry || leadData.brandName)) {
    text = `你好，我在网站看到 RM899 专业网站配套。\n\n` +
      `【我的行业】：${leadData.industry || '未填写'}\n` +
      `【品牌/公司】：${leadData.brandName || '未填写'}\n` +
      `【目前是否有网站】：${leadData.hasWebsite || '暂无网页'}\n` +
      `【想了解的需求】：${leadData.websiteType || 'RM899 专业官网配套'}\n\n` +
      `请问这个配套适合我的生意吗？`;
  }

  const encodedMessage = encodeURIComponent(text);
  return `https://wa.me/${number}?text=${encodedMessage}`;
}
