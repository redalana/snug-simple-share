import { useEffect, useRef, useState } from "react";
import { UploadCloud, CheckCircle2, X } from "lucide-react";

export type UploadItem = {
  id: string;
  file: File;
  preview: string;
  progress: number;
};

const MAX_SIZE = 5 * 1024 * 1024;
const ACCEPT = ["image/jpeg", "image/png", "image/webp"];

export function ImageUpload({
  items,
  setItems,
}: {
  items: UploadItem[];
  setItems: React.Dispatch<React.SetStateAction<UploadItem[]>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addFiles = (files: FileList | File[]) => {
    setError(null);
    const arr = Array.from(files);
    const accepted: UploadItem[] = [];
    for (const file of arr) {
      if (!ACCEPT.includes(file.type)) {
        setError(`"${file.name}" — unsupported format. Use JPG, PNG or WEBP.`);
        continue;
      }
      if (file.size > MAX_SIZE) {
        setError(`"${file.name}" is larger than 5MB.`);
        continue;
      }
      accepted.push({
        id: `${file.name}-${file.size}-${Date.now()}-${Math.random()}`,
        file,
        preview: URL.createObjectURL(file),
        progress: 0,
      });
    }
    if (accepted.length === 0) return;
    setItems((prev) => [...prev, ...accepted]);
    accepted.forEach((it) => {
      const interval = window.setInterval(() => {
        setItems((prev) =>
          prev.map((p) =>
            p.id === it.id ? { ...p, progress: Math.min(100, p.progress + 12 + Math.random() * 10) } : p,
          ),
        );
      }, 140);
      window.setTimeout(() => window.clearInterval(interval), 1400);
    });
  };

  const remove = (id: string) => {
    setItems((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target) URL.revokeObjectURL(target.preview);
      return prev.filter((p) => p.id !== id);
    });
  };

  useEffect(() => {
    return () => {
      items.forEach((i) => URL.revokeObjectURL(i.preview));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
        }}
        className={`flex w-full flex-col items-center justify-center rounded-xl border-2 border-dashed px-6 py-8 text-center transition-colors ${
          dragOver ? "border-primary bg-primary/5" : "border-border bg-background/60 hover:border-primary/60"
        }`}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <UploadCloud className="h-6 w-6" />
        </div>
        <div className="mt-3 text-sm font-semibold text-foreground">
          Click or drag &amp; drop images
        </div>
        <div className="mt-1 text-[calc(12 * var(--desktop-px-unit))] text-muted-foreground">
          JPG, PNG or WEBP · up to 5MB each · multiple allowed
        </div>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files) addFiles(e.target.files);
          e.target.value = "";
        }}
      />

      {error && (
        <div className="mt-3 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-[calc(12.5 * var(--desktop-px-unit))] font-medium text-destructive">
          {error}
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-background"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img src={it.preview} alt={it.file.name} className="h-full w-full object-cover" />
              </div>
              {it.progress < 100 && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-black/20">
                  <div
                    className="h-full bg-primary transition-[width] duration-200"
                    style={{ width: `${it.progress}%` }}
                  />
                </div>
              )}
              {it.progress >= 100 && (
                <div className="absolute bottom-1 left-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow">
                  <CheckCircle2 className="h-3 w-3" strokeWidth={3} />
                </div>
              )}
              <button
                type="button"
                onClick={() => remove(it.id)}
                aria-label={`Remove ${it.file.name}`}
                className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-ink/80 text-white opacity-90 transition-all hover:bg-primary"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
