export function FieldError({ msg }: { msg: string }) {
  return <p className="mt-1.5 text-xs font-medium text-destructive">{msg}</p>;
}
