import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { FiDownload, FiCopy } from 'react-icons/fi';

type Mode = 'url' | 'text' | 'wifi' | 'vcard';

interface WifiFields {
  ssid: string;
  password: string;
  encryption: 'WPA' | 'WEP' | 'nopass';
  hidden: boolean;
}

export default function Generator() {
  const [mode, setMode] = useState<Mode>('url');
  const [data, setData] = useState<Record<string, any>>({});
  const [qr, setQr] = useState<string>('');

  // auto generate on changes
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleGenerate();
    }, 300); // debounce for 300ms
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, mode]);

  const handleGenerate = async () => {
    let payload = '';
    switch (mode) {
      case 'url':
        payload = data.url || '';
        break;
      case 'text':
        payload = data.text || '';
        break;
      case 'wifi': {
        const wifi = data as WifiFields;
        payload = `WIFI:T:${wifi.encryption};S:${wifi.ssid};P:${wifi.password};H:${wifi.hidden ? 'true' : 'false'};;`;
        break;
      }
      case 'vcard':
        payload = data.vcard || '';
        break;
    }
    if (!payload) {
      setQr('');
      return;
    }
    try {
      const url = await QRCode.toDataURL(payload);
      setQr(url);
    } catch (err) {
      console.error(err);
    }
  };

  const downloadPng = () => {
    if (!qr) return;
    const link = document.createElement('a');
    link.href = qr;
    link.download = 'qr.png';
    link.click();
  };

  const copyToClipboard = () => {
    if (!qr) return;
    fetch(qr)
      .then((res) => res.blob())
      .then(async (blob) => {
        try {
          await navigator.clipboard.write([
            new window.ClipboardItem({ [blob.type]: blob }),
          ]);
          alert('QR-code gekopieerd naar klembord!');
        } catch {
          alert('Kopiëren mislukt, gebruik download.');
        }
      });
  };

  return (
    <div>
      <div className="mb-4 flex gap-2 justify-center">
        {(['url', 'text', 'wifi', 'vcard'] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-3 py-1 rounded ${mode === m ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {m.toUpperCase()}
          </button>
        ))}
      </div>

      {mode === 'url' && (
        <input
          type="url"
          placeholder="https://voorbeeld.nl"
          className="w-full mb-4 p-2 border rounded"
          value={data.url || ''}
          onChange={(e) => setData({ ...data, url: e.target.value })}
        />
      )}

      {mode === 'text' && (
        <textarea
          placeholder="Uw tekst hier"
          className="w-full mb-4 p-2 border rounded"
          value={data.text || ''}
          onChange={(e) => setData({ ...data, text: e.target.value })}
        />
      )}

      {mode === 'wifi' && (
        <div className="space-y-2">
          <input
            type="text"
            placeholder="SSID"
            className="w-full p-2 border rounded"
            value={data.ssid || ''}
            onChange={(e) => setData({ ...data, ssid: e.target.value })}
          />
          <input
            type="text"
            placeholder="Wachtwoord"
            className="w-full p-2 border rounded"
            value={data.password || ''}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
      )}

      {mode === 'vcard' && (
        <textarea
          placeholder="Plak hier uw vCard"
          className="w-full mb-4 p-2 border rounded"
          value={data.vcard || ''}
          onChange={(e) => setData({ ...data, vcard: e.target.value })}
        />
      )}

      {qr === '' && (
        <p className="text-center text-sm text-gray-500 mb-4">
          Vul de velden hierboven in om automatisch je QR-code te zien.
        </p>
      )}

      {qr && (
        <div className="text-center mt-6">
          <img src={qr} alt="QR Code" className="mx-auto" />

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={downloadPng}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded shadow"
            >
              <FiDownload /> Download PNG
            </button>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded shadow"
            >
              <FiCopy /> Kopieer
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 