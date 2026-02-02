"use client";

import { useState, ReactNode } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`px-4 py-2 rounded text-white transition
        ${pending ? "bg-red-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"}
      `}
    >
      {pending ? "Excluindo..." : "Excluir"}
    </button>
  );
}

export function DeleteConfirmDialog({
  action,
  children,
  title = "Confirmar exclusão",
  description = "Tem certeza que deseja excluir este item? Essa ação não pode ser desfeita.",
}: {
  action: () => void;
  children: ReactNode;
  title?: string;
  description?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        {children}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div className="flex flex-col relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md z-10">
            <h2 className="text-lg font-semibold">{title}</h2>

            <p className="flex-1 whitespace-pre-wrap text-gray-600 mt-2">
              {description}
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded"
              >
                Cancelar
              </button>

              <form action={action}>
                <SubmitButton />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
