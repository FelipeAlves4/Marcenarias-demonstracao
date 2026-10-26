import { useEffect, useRef, useState } from "react";
import { PERGUNTAS, montarMensagem, type Pergunta, type Respostas } from "@/data/content";
import { MSG_PADRAO, linkWhats } from "@/lib/dipieva-config";
import { Icon, WaLink } from "./Icon";

const TOTAL = PERGUNTAS.length + 1;

function QuoteStep({
  q,
  valores,
  onChange,
}: {
  q: Pergunta;
  valores: string[];
  onChange: (v: string[], auto: boolean) => void;
}) {
  return (
    <fieldset className="etapa">
      <legend>{q.legenda}</legend>
      {q.dica && <p className="dica">{q.dica}</p>}
      <div className="opcoes">
        {q.opcoes.map((o, i) => (
          <label className="opcao" key={o}>
            <input
              type={q.multipla ? "checkbox" : "radio"}
              name={q.nome}
              value={o}
              checked={valores.includes(o)}
              autoFocus={i === 0 && q.nome !== "ambiente"}
              onChange={(e) => {
                if (q.multipla) onChange(e.target.checked ? [...valores, o] : valores.filter((x) => x !== o), false);
                else onChange([o], true);
              }}
            />
            <span>{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function QuoteWizard() {
  const [etapa, setEtapa] = useState(0);
  const [erro, setErro] = useState(false);
  const [r, setR] = useState<Respostas>({ ambiente: [], imovel: [], arquiteto: [], quando: [], nome: "", local: "" });
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const ir = (i: number) => { setErro(false); setEtapa(i); };
  const ultima = etapa === TOTAL - 1;
  const msg = montarMensagem(r);

  const avancar = () => {
    const q = PERGUNTAS[etapa];
    if (q && !r[q.nome].length) return setErro(true);
    ir(etapa + 1);
  };

  return (
    <section className="section orcamento" id="orcamento">
      <div className="wrap">
        <div className="revelar">
          <span className="eyebrow">Orçamento</span>
          <h2>Conte o que você precisa em 30 segundos.</h2>
          <p className="lead">Quatro perguntas rápidas. No final, abrimos o WhatsApp com a mensagem pronta: é só enviar. Não guardamos nenhuma informação neste site.</p>
          <p style={{ marginTop: 22 }}>
            <WaLink className="link-arrow" msg={MSG_PADRAO}>Prefiro conversar direto <Icon id="i-seta" width={18} height={18} /></WaLink>
          </p>
        </div>
        <form className="quiz revelar" onSubmit={(e) => e.preventDefault()} aria-label="Pedido de orçamento">
          <div className="quiz-topo">
            <span>Pergunta <b className="passo-atual">{etapa + 1} de {TOTAL}</b></span>
            <span>Leva menos de um minuto</span>
          </div>
          <div className="barra"><i style={{ width: `${((etapa + 1) / TOTAL) * 100}%` }} /></div>

          {!ultima && (
            <QuoteStep
              key={etapa}
              q={PERGUNTAS[etapa]}
              valores={r[PERGUNTAS[etapa].nome]}
              onChange={(v, auto) => {
                const nome = PERGUNTAS[etapa].nome;
                setR((s) => ({ ...s, [nome]: v }));
                setErro(false);
                if (auto) {
                  window.clearTimeout(timer.current);
                  const atual = etapa;
                  timer.current = window.setTimeout(() => setEtapa((e) => (e === atual ? e + 1 : e)), 260);
                }
              }}
            />
          )}

          {ultima && (
            <fieldset className="etapa">
              <legend>Para finalizar (opcional)</legend>
              <div className="campos">
                <div className="campo">
                  <label htmlFor="q-nome">Seu nome</label>
                  <input id="q-nome" type="text" autoComplete="given-name" placeholder="Como podemos te chamar?" autoFocus value={r.nome} onChange={(e) => setR((s) => ({ ...s, nome: e.target.value }))} />
                </div>
                <div className="campo">
                  <label htmlFor="q-local">Bairro ou cidade do imóvel</label>
                  <input id="q-local" type="text" placeholder="Ex.: Jardim Maria Izabel, Marília" value={r.local} onChange={(e) => setR((s) => ({ ...s, local: e.target.value }))} />
                </div>
              </div>
              <p className="dica" style={{ margin: "18px 0 8px" }}>Esta é a mensagem que vai para o nosso WhatsApp:</p>
              <div className="resumo">{msg}</div>
            </fieldset>
          )}

          <p className="aviso aviso-erro" hidden={!erro} style={{ color: "#9B3B2E" }} role="alert">Escolha pelo menos uma opção para continuar.</p>
          <div className="quiz-nav">
            <button className="voltar" type="button" style={{ visibility: etapa === 0 ? "hidden" : "visible" }} onClick={() => ir(Math.max(etapa - 1, 0))}>Voltar</button>
            {!ultima && <button className="btn avancar" type="button" onClick={avancar}>Continuar <Icon id="i-seta" /></button>}
            {ultima && (
              <a className="btn btn-wood enviar" href={linkWhats(msg)} target="_blank" rel="noopener"><Icon id="i-wa" />Enviar pelo WhatsApp</a>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
