'use client';

import { useState } from 'react';
import { Plus, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function RequestFab() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    product: '',
    business: '',
    owner: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.product.trim() ||
      !form.business.trim() ||
      !form.owner.trim() ||
      !form.description.trim()
    ) {
      toast({
        title: 'Completa todos los campos',
        description: 'Revisa la información ingresada.',
        variant: 'destructive',
      });
      return;
    }

    if (form.description.length > 400) {
      toast({
        title: 'Descripción muy larga',
        description: 'La descripción debe tener máximo 400 caracteres.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    const { error } = await supabase.from('ux_requests').insert({
      product: form.product.trim(),
      business_unit: form.business.trim(),
      owner_name: form.owner.trim(),
      description: form.description.trim(),
    });

    setLoading(false);

    if (error) {
      toast({
        title: 'Error',
        description: 'No pudimos enviar tu solicitud. Intenta nuevamente.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: '¡Solicitud enviada con éxito!',
      description: 'Te contactaremos pronto.',
    });

    setForm({ product: '', business: '', owner: '', description: '' });
    setOpen(false);
  };

  return (
    <>
      <button
        aria-label="Solicitar proceso UX"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-[72px] md:right-[72px] z-50 h-14 w-14 rounded-full bg-gradient-to-br from-[#00A859] to-[#8CC63F] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00A859]"
      >
        <Plus className="w-6 h-6" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Solicitud de proceso UX
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={onSubmit} className="space-y-5 mt-4">
            <div className="space-y-2">
              <Label htmlFor="product" className="text-sm font-semibold text-gray-700">
                Producto <span className="text-red-500">*</span>
              </Label>
              <Input
                id="product"
                value={form.product}
                onChange={(e) =>
                  setForm((f) => ({ ...f, product: e.target.value }))
                }
                placeholder="Ej: Portal de Trabajadores"
                required
                className="border-gray-300 focus:ring-[#00A859] focus:border-[#00A859]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="business" className="text-sm font-semibold text-gray-700">
                Negocio al que aplica <span className="text-red-500">*</span>
              </Label>
              <Input
                id="business"
                value={form.business}
                onChange={(e) =>
                  setForm((f) => ({ ...f, business: e.target.value }))
                }
                placeholder="Ej: Recursos Humanos"
                required
                className="border-gray-300 focus:ring-[#00A859] focus:border-[#00A859]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="owner" className="text-sm font-semibold text-gray-700">
                Responsable <span className="text-red-500">*</span>
              </Label>
              <Input
                id="owner"
                value={form.owner}
                onChange={(e) =>
                  setForm((f) => ({ ...f, owner: e.target.value }))
                }
                placeholder="Tu nombre completo"
                required
                className="border-gray-300 focus:ring-[#00A859] focus:border-[#00A859]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-semibold text-gray-700">
                Descripción breve <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="description"
                value={form.description}
                onChange={(e) =>
                  setForm((f) => ({ ...f, description: e.target.value }))
                }
                placeholder="Describe brevemente qué necesitas..."
                maxLength={400}
                rows={4}
                required
                className="border-gray-300 focus:ring-[#00A859] focus:border-[#00A859] resize-none"
              />
              <p className="text-xs text-gray-500">
                {form.description.length}/400 caracteres
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setOpen(false)}
                disabled={loading}
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="bg-[#00A859] hover:bg-[#008A48] text-white px-6"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Enviar solicitud'
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
