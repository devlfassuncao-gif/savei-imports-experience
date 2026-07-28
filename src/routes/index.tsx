import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, MapPin } from "lucide-react";
import heroExperience from "@/assets/iphone-hero.png.asset.json";
import saveLogo from "@/assets/save-imports-logo.png.asset.json";

const WHATSAPP_SELLER = "https://wa.me/5591986122089?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20adquirir%20um%20iPhone%20na%20Save%20Imports.";
const WHATSAPP_LUCAS = "https://wa.me/5591981035200?text=Tenho%20interesse%20em%20criar%20um%20site%20para%20a%20minha%20loja";
const INSTAGRAM_URL = "https://instagram.com/saveiimports";
const TIKTOK_URL = "https://tiktok.com/@saveiimports";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Save Imports — Importamos o que importa para você" },
      {
        name: "description",
        content:
          "Save Imports: aquisição de iPhone em Belém/PA com contrato jurídico, Pix com desconto, cartão em até 12x e unboxing personalizado.",
      },
      { property: "og:title", content: "Save Imports — Importamos o que importa para você" },
      {
        property: "og:description",
        content:
          "Contrato jurídico, pagamento flexível e unboxing premium. Atendimento em Belém/PA pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const steps = [
  {
    n: "01",
    title: "Primeiro Contato",
    body: "Você chama nosso vendedor direto no WhatsApp. Atendimento humano, sem robô, sem burocracia.",
    highlight: false,
  },
  {
    n: "02",
    title: "Consultoria",
    body: "Conversa com o vendedor para alinhar o modelo de interesse, cor e capacidade ideais para você.",
    highlight: false,
  },
  {
    n: "03",
    title: "Contrato de Aquisição",
    body: "Formalizamos todos os detalhes do pedido em um contrato claro e transparente.",
    highlight: false,
  },
  {
    n: "04",
    title: "Validade Jurídica",
    body: "Contrato enviado pela plataforma Autentique com assinatura digital e plena validade jurídica.",
    highlight: true,
  },
  {
    n: "05",
    title: "Pagamento Seguro",
    body: "Neste momento a compra é feita na maior segurança possível — dados blindados e comprovação instantânea.",
    highlight: false,
  },
  {
    n: "06",
    title: "Envio ao seu Endereço",
    body: "Logística acompanhada e monitorada até chegar em suas mãos com integridade total.",
    highlight: false,
  },
  {
    n: "07",
    title: "Unboxing Personalizado",
    body: "Na mesma região, entrego pessoalmente com uma experiência de unboxing incrível — um ritual de abertura só seu.",
    highlight: true,
  },
];


// TikTok icon (lucide não possui um oficial)
function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.86a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.84-.24z" />
    </svg>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-brand-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl md:text-2xl font-extrabold tracking-tighter">
            Save<span className="text-brand-green"> Imports</span>
          </div>
          <a
            href={WHATSAPP_SELLER}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] md:text-xs font-bold uppercase tracking-widest border border-brand-green px-4 md:px-6 py-2 rounded-full text-brand-green hover:bg-brand-green hover:text-brand-bg transition-colors"
          >
            Falar no WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-fade pointer-events-none" aria-hidden />
        <div
          className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: "rgba(65,232,37,0.12)", animation: "float-pulse 8s ease-in-out infinite" }}
          aria-hidden
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-brand-green mb-6 border border-brand-green/30 rounded-full px-4 py-1.5">
            Aquisição Premium de iPhone
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05]">
            Importamos o que <span className="text-brand-green">importa</span> para você{" "}
            <span className="inline-block align-middle" style={{ color: "#41e825" }} aria-label="coração verde">
              ♥
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Trabalhamos exclusivamente com <span className="text-white">produtos importados</span>: iPhone, Macs, Câmeras e Lentes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WHATSAPP_SELLER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-brand-green text-brand-bg font-bold text-base px-8 py-4 rounded-full hover:scale-[1.03] active:scale-95 transition-transform shadow-[0_0_60px_-15px_rgba(65,232,37,0.6)]"
            >
              Chamar vendedor no WhatsApp
            </a>
            <a
              href="#processo"
              className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-brand-green transition-colors"
            >
              Ver como funciona ↓
            </a>
          </div>
        </div>
      </section>

      {/* Diferenciais — só a Save entrega */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-green mb-4">
              Só a Save entrega
            </h2>
            <p className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
              Por que comprar com a <span className="text-brand-green">Save Imports</span>?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl border border-brand-green/20 bg-brand-green/5">
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6 border border-brand-green/20">
                <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Contrato jurídico</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Você recebe um contrato com validade jurídica assinado digitalmente pela plataforma Autentique, com total segurança.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.03]">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 6.376 6.376 0 0 1 6.338-7.27 6.375 6.375 0 0 1 6.339 7.27Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Transparência total</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Dentro do contrato você encontra informações sobre a história pessoal do responsável pela Save, dados do produto, termos de garantia e prazos.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.03]">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                <svg className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Unboxing personalizado</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Para clientes de Belém/PA, entregamos pessoalmente com um ritual de abertura exclusivo que torna a experiência inesquecível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process — 7 steps */}
      <section id="processo" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-green mb-4">
              O Caminho Save / 01 — 07
            </h2>
            <p className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
              Uma jornada desenhada para eliminar qualquer <span className="text-brand-green">incerteza</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.n}
                className={`p-8 rounded-2xl border transition-all group ${
                  s.highlight
                    ? "border-brand-green/30 bg-brand-green/5"
                    : "border-white/5 bg-white/[0.03] hover:border-brand-green/30"
                }`}
              >
                <span className="text-4xl font-extrabold text-brand-green/30 group-hover:text-brand-green transition-colors">
                  {s.n}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-3">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-green mb-4">
              Formas de Pagamento
            </h2>
            <p className="text-3xl md:text-4xl font-bold">
              Flexibilidade <span className="text-brand-green">total</span> para você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl border border-brand-green/30 bg-brand-green/5 text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green">
                À vista
              </span>
              <p className="text-4xl font-extrabold text-brand-green my-4">PIX</p>
              <p className="text-sm text-white/60">Desconto exclusivo para pagamentos via Pix.</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.03] text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Cartão de Crédito
              </span>
              <p className="text-4xl font-extrabold my-4">
                até <span className="text-brand-green">12x</span> ou <span className="text-brand-green">18x</span>
              </p>
              <p className="text-sm text-white/60">Parcelamento facilitado no seu cartão em até 12x ou 18x.</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.03] text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Flexibilidade
              </span>
              <p className="text-4xl font-extrabold my-4">
                2+ <span className="text-brand-green">cartões</span>
              </p>
              <p className="text-sm text-white/60">Combine mais de um cartão para compor sua compra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience + Hours */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-green">
              A experiência Save
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
              Venha viver a <br />
              <span className="text-brand-green italic">experiência Save!</span>
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed max-w-lg">
              Cada aquisição é um ritual. Da primeira mensagem no WhatsApp ao momento em que o
              lacre é rompido, tudo foi pensado para que a espera se transforme em celebração.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-md">
              <div className="p-5 rounded-2xl border border-brand-green/30 bg-brand-green/5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-green mb-2">
                  Seg — Sáb
                </p>
                <p className="text-2xl font-extrabold">09h — 18h</p>
              </div>
              <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.03]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
                  Área de atendimento
                </p>
                <p className="text-2xl font-extrabold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-green" />
                  Belém/PA
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroExperience.url}
              alt="Experiência de unboxing premium Save Imports"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-3xl border border-white/10"
            />
            <div
              className="absolute -inset-4 -z-10 rounded-[2rem] blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle at 30% 70%, rgba(65,232,37,0.4), transparent 60%)" }}
              aria-hidden
            />
          </div>
        </div>
      </section>

      {/* Warranty policy */}
      <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-green mb-4">
            Garantia & Trocas
          </h2>
          <p className="text-3xl md:text-4xl font-bold mb-8">
            Política de <span className="text-brand-green">garantia e troca</span>.
          </p>
          <div className="p-8 md:p-10 rounded-2xl border border-brand-green/20 bg-brand-green/5 text-left">
            <p className="text-white/75 leading-relaxed text-base md:text-lg">
              As trocas serão feitas <span className="text-white font-semibold">no ato do recebimento do produto</span>,
              desde que haja confirmação de que o item chegou <span className="text-brand-green">avariado</span> ou{" "}
              <span className="text-brand-green">diferente do solicitado</span>. Toda a formalização e prazos de
              garantia estão descritos no contrato de aquisição.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Bar */}
      <div className="bg-brand-green py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <span className="text-brand-bg font-extrabold text-xl md:text-2xl">
            Pronto para viver a experiência Save?
          </span>
          <a
            href={WHATSAPP_SELLER}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-bg text-brand-green px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform whitespace-nowrap"
          >
            Chamar vendedor agora
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            <div className="max-w-xs">
              <div className="text-xl font-extrabold mb-4">
                Save<span className="text-brand-green"> Imports</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed italic mb-4">
                Importamos o que importa para você. Aquisição segura de iPhones em Belém/PA, com
                contrato jurídico e experiência premium.
              </p>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">
                CNPJ 60.232.830/0001-76
              </p>
            </div>
            <div className="flex flex-wrap gap-12">
              <div>
                <h4 className="text-xs font-bold uppercase text-brand-green mb-4 tracking-widest">
                  Institucional
                </h4>
                <ul className="space-y-3 text-sm text-white/60">
                  <li>
                    <Link to="/termos-de-uso" className="hover:text-brand-green transition-colors">
                      Termos de Uso
                    </Link>
                  </li>
                  <li>
                    <Link to="/politica-de-privacidade" className="hover:text-brand-green transition-colors">
                      Política de Privacidade
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase text-brand-green mb-4 tracking-widest">
                  Contato
                </h4>
                <a
                  href={WHATSAPP_SELLER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-brand-green transition-colors block mb-4"
                >
                  WhatsApp: (91) 98612-2089
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram @saveiimports"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-brand-green hover:border-brand-green transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={TIKTOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok @saveiimports"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/70 hover:text-brand-green hover:border-brand-green transition-colors"
                  >
                    <TikTokIcon className="w-4 h-4" />
                  </a>
                  <span className="text-xs text-white/50 ml-1">@saveiimports</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} Save Imports. Todos os direitos reservados.</p>
            <p>
              Feito por{" "}
              <a
                href={WHATSAPP_LUCAS}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-green hover:underline"
              >
                Lucas Felippe
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
