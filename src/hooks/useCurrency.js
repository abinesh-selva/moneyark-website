import { useState, useEffect } from 'react';

const CURRENCY_MAP = {
  USD: '$', EUR: '€', GBP: '£', INR: '₹', JPY: '¥',
  CNY: '¥', AUD: 'A$', CAD: 'C$', BRL: 'R$', RUB: '₽',
  KRW: '₩', SGD: 'S$', CHF: 'Fr', AED: 'د.إ', ZAR: 'R',
};

// Fallback: guess from browser locale
function guessFromLocale() {
  const locale = navigator.language || 'en-US';
  const region = locale.split('-')[1]?.toUpperCase();
  const map = {
    US: 'USD', IN: 'INR', GB: 'GBP', DE: 'EUR', FR: 'EUR',
    ES: 'EUR', IT: 'EUR', NL: 'EUR', JP: 'JPY', CN: 'CNY',
    KR: 'KRW', AU: 'AUD', CA: 'CAD', BR: 'BRL', RU: 'RUB',
    SG: 'SGD', CH: 'CHF', AE: 'AED', ZA: 'ZAR',
  };
  return map[region] || 'USD';
}

export function useCurrency() {
  const [currency, setCurrency] = useState({ code: 'USD', symbol: '$' });

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);

    fetch('https://ipapi.co/json/', { signal: controller.signal })
      .then(r => r.json())
      .then(data => {
        const code = data.currency || guessFromLocale();
        setCurrency({ code, symbol: CURRENCY_MAP[code] || code });
      })
      .catch(() => {
        const code = guessFromLocale();
        setCurrency({ code, symbol: CURRENCY_MAP[code] || code });
      })
      .finally(() => clearTimeout(timeout));

    return () => { controller.abort(); clearTimeout(timeout); };
  }, []);

  return currency;
}
