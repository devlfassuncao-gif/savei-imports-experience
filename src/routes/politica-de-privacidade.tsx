import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Saveiimports" },
      { name: "description", content: "Política de privacidade do site Saveiimports." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-white px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-xs font-bold uppercase tracking-widest text-brand-green hover:underline">
          ← Voltar
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-8 mb-8">
          Política de <span className="text-brand-green">Privacidade</span>
        </h1>
        <div className="space-y-6 text-white/70 leading-relaxed text-sm md:text-base">
          <p>
            Sua privacidade é levada a sério pela Saveiimports. Esta política descreve como
            tratamos as informações compartilhadas durante o atendimento e a aquisição.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">1. Dados coletados</h2>
          <p>
            Coletamos apenas os dados necessários para a formalização do contrato e da entrega:
            nome, documento, endereço, contato e dados de pagamento. Nenhuma informação é
            solicitada fora do atendimento oficial via WhatsApp e da plataforma Jotform.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">2. Uso das informações</h2>
          <p>
            Utilizamos seus dados exclusivamente para conduzir a compra, emitir o contrato,
            processar o pagamento e realizar a entrega. Não vendemos, não compartilhamos e não
            usamos suas informações para outros fins.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">3. Armazenamento e segurança</h2>
          <p>
            Contratos são armazenados na plataforma Jotform, com validade jurídica e proteção
            adequada. Dados sensíveis de pagamento são tratados diretamente pelos provedores
            oficiais (Pix e operadoras de cartão).
          </p>
          <h2 className="text-xl font-bold text-white pt-4">4. Cookies</h2>
          <p>
            Este site utiliza apenas recursos técnicos essenciais para navegação. Não realizamos
            rastreamento publicitário.
          </p>
          <h2 className="text-xl font-bold text-white pt-4">5. Seus direitos</h2>
          <p>
            Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento
            pelo WhatsApp (91) 98612-2089.
          </p>
        </div>
      </div>
    </div>
  );
}
