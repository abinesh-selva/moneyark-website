import { supabase } from '../lib/supabase';

const DownloadButton = ({ className, children }) => {
  async function handleDownload() {
    await supabase.rpc('increment_downloads');
  }

  return (
    <a
      href="/moneyark.apk"
      download="MoneyArk.apk"
      className={className}
      onClick={handleDownload}
    >
      {children}
    </a>
  );
};

export default DownloadButton;
