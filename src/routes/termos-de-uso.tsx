import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Save Imports" },
      { name: "description", content: "Termos de uso do site Save Imports." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-brand-green hover:underline">
          ← Voltar
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-8 mb-8">
          Termos de <span className="text-brand-green">Uso</span>
        </h1>
        <div className="space-y-6 text-white/70 leading-relaxed text-sm md:text-base">
          <p>
            Bem-vindo à Save Imports. Ao acessar este site você concorda com os termos abaixo,
            que regulam o uso das informações, do atendimento e do processo de aquisição
            oferecido.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">1. Sobre a Save Imports</h2>
          <p>
            A Save Imports (CNPJ 60.232.830/0001-76), sediada em Belém/PA, atua na
            intermediação e comercialização de dispositivos iPhone, oferecendo consultoria,
            formalização contratual e logística de entrega. Todos os atendimentos são
            iniciados por WhatsApp.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">2. Uso do site</h2>
          <p>
            Este site tem caráter informativo. Não há venda direta pela plataforma — a
            negociação, contrato e pagamento acontecem em canais próprios, com validade
            jurídica garantida via plataforma Jotform.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">3. Contrato e pagamento</h2>
          <p>
            Todo pedido é formalizado por contrato assinado digitalmente antes de qualquer
            pagamento. Aceitamos Pix (com desconto), cartão de crédito em até 12x e composição
            com mais de um cartão.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">4. Entrega, garantia e trocas</h2>
          <p>
            A entrega pode ser realizada por transportadora ao endereço informado ou, para
            clientes de Belém/PA, entregue pessoalmente com unboxing personalizado. As trocas
            serão feitas no ato do recebimento do produto, desde que haja confirmação de que
            o item chegou avariado ou diferente do solicitado. Prazos e termos de garantia
            estão descritos no contrato de aquisição.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">5. Contato</h2>
          <p>
            Dúvidas sobre estes termos podem ser encaminhadas pelo WhatsApp (91) 98612-2089.
          </p>
        </div>
      </div>
    </div>
  );
}
