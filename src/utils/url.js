import { toast } from 'react-toastify';

export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export async function copyToClipboard(text) {
  await navigator.clipboard.writeText(text);
  toast.success('Copied to clipboard! ✅');
};
