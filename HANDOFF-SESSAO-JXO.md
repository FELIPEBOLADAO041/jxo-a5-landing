# Handoff — Landing Page JXO A5

Última atualização: 14 de julho de 2026  
Status: versão `mark2` publicada no GitHub Pages

## 1. Objetivo do projeto

Criar uma landing page para a JXO com foco comercial na selecionadora eletrônica de grãos Modelo A5.

O site deve:

- Apresentar a tecnologia de seleção com inteligência artificial.
- Demonstrar impacto em qualidade, produtividade e retorno financeiro.
- Gerar leads qualificados para a equipe comercial.
- Transmitir uma imagem tecnológica, industrial e confiável.
- Dar destaque ao pós-venda e à assistência técnica brasileira.

## 2. Diretórios do projeto

### Versão atual — trabalhar aqui

```text
/Users/haliaagent/Downloads/DATABASE AGENTES/JXO/mark2
```

### Versão anterior preservada

```text
/Users/haliaagent/Downloads/DATABASE AGENTES/JXO/LANDING PAGE
```

Não alterar a versão anterior. Ela foi mantida como backup da primeira direção.

## 3. Fontes de conteúdo utilizadas

### Copy da landing page

```text
/Users/haliaagent/Downloads/DATABASE AGENTES/JXO/Copy Landing Page - Selecionadora A (JXO) (1).pdf
```

### Transcrição da reunião de kickoff

```text
/Users/haliaagent/Downloads/DATABASE AGENTES/JXO/KICKOFF/transcricao call kickoff.pdf
```

### Análise estratégica

```text
/Users/haliaagent/Downloads/DATABASE AGENTES/JXO/KICKOFF/Análise SWOT e PESTEL para JXO.pdf
```

### Catálogo técnico

```text
/Users/haliaagent/Downloads/DATABASE AGENTES/JXO/IMAGENS JXO/FOTOS-VÍDEOS/catalogo completo.pdf
```

### Página atual do produto

https://jxo.ind.br/ver-produto/selecionadora-a-para-soja-milho-e-outros-graos

### Referência visual

https://anysort.com.br/

## 4. Direção de arte definida

- Direção industrial e tecnológica, com bastante espaço em branco.
- Preferência do cliente por cores claras.
- Verde JXO como cor institucional.
- Amarelo da máquina como cor de destaque e conversão.
- Preto/grafite usado principalmente em áreas de contraste, hero e formulário.
- Helvetica aplicada em toda a página.
- Títulos grandes, mas menores e mais controlados na versão `mark2`.
- Interações suaves e sem excesso de animações decorativas.

## 5. Fontes locais

Origem:

```text
/Users/haliaagent/Downloads/DATABASE AGENTES/JXO/helvetica-255
```

Arquivos copiados para:

```text
mark2/assets/fonts/
```

Pesos utilizados:

- Helvetica regular.
- Helvetica bold.
- Helvetica light.
- Helvetica oblique.

As declarações `@font-face` estão em `mark2.css`.

## 6. Estrutura atual da página

### 1. Hero com vídeo controlado pelo scroll

Copy atual:

> A linha completa que acompanha sua produção do início ao fim

> Eficácia não é eficiência. Qualidade não é opcional.

> Com 99,9% de acerto, nossas máquinas trabalham para garantir que nenhum grão bom seja perdido e nenhum grão ruim passe.

O comportamento do vídeo foi aprovado e não deve ser alterado sem solicitação explícita.

### 2. Seção de desafios

Título:

> Seu lote pode valer mais. O detalhe decide.

Três problemas apresentados:

- Mão de obra escassa.
- Perda na classificação.
- Colheita desuniforme.

Essa seção foi aprovada visualmente.

### 3. A5 em ação

Dois cards de vídeo substituíram a antiga seção técnica escura.

Cada card abre um modal com:

- Vídeo completo.
- Título e subtítulo.
- Três argumentos resumidos.
- Fechamento por botão, clique no fundo ou tecla `Esc`.

#### Card 1 — Inteligência artificial

Vídeo original:

```text
/Users/haliaagent/Downloads/DATABASE AGENTES/JXO/IMAGENS JXO/FOTOS-VÍDEOS/JXO_A_5_sorting_machine_202607141325.mp4
```

Arquivo no projeto:

```text
assets/video-ia-a5.mp4
```

Argumentos:

- Deep Learning.
- Mapeamento em milissegundos.
- Expulsão cirúrgica por jatos de ar.

#### Card 2 — Retorno financeiro

Vídeo original:

```text
/Users/haliaagent/Downloads/DATABASE AGENTES/JXO/IMAGENS JXO/FOTOS-VÍDEOS/Coffee_farming_profitability_han…_202607141416.mp4
```

Arquivo no projeto:

```text
assets/video-retorno.mp4
```

Argumentos:

- Maior valor por saca.
- Menos descarte de grãos saudáveis.
- Autonomia operacional e comercial.

### 4. Outros modelos

O foco da landing page permanece na A5.

Os outros modelos aparecem somente numa faixa compacta com capacidades:

| Modelo | Capacidade declarada* |
|---|---:|
| A1 | 2 ton/h |
| A2 | 4 ton/h |
| A3 | 6 ton/h |
| A4 | 8 ton/h |
| A5 | 10 ton/h |
| A6 | 12 ton/h |
| A7 | 14 ton/h |
| A8 | 16 ton/h |
| A10 | 20 ton/h |
| A12 | 24 ton/h |

\* A capacidade varia conforme a qualidade da matéria-prima na entrada.

### 5. Por que JXO

Seção aprovada e preservada.

Pontos destacados:

- Mais de cinco anos levando tecnologia ao campo.
- Software de inteligência artificial adaptado à operação.
- Assistência técnica próxima em território nacional.

### 6. Formulário de contato

Seção considerada essencial.

Campos:

- Nome completo.
- WhatsApp.
- E-mail.
- Cultura principal.
- Estado.
- Descrição da operação.

Comportamento atual:

- O envio abre um e-mail para `faleconosco@jxo.ind.br` com os dados preenchidos.
- Em uma próxima etapa, pode ser integrado a CRM, webhook ou backend.

### 7. Rodapé

Links adicionados:

- Instagram: https://www.instagram.com/jxo_solucaoeletronica/
- LinkedIn: https://www.linkedin.com/company/jxo

## 7. Vídeo da hero

Vídeo original:

```text
/Users/haliaagent/Downloads/DATABASE AGENTES/JXO/IMAGENS JXO/FOTOS-VÍDEOS/Coffee_sorting_machine_in_action_202607141344.mp4
```

Versão preparada para scroll:

```text
assets/hero-cafe-scroll.mp4
```

O vídeo foi recodificado com todos os frames como quadros-chave. Isso permite buscar qualquer ponto do vídeo sem travamentos perceptíveis.

O JavaScript utiliza:

- Posição da seção em relação à janela.
- Progresso normalizado entre `0` e `1`.
- Conversão do progresso para o tempo total do vídeo.
- Interpolação gradual entre o tempo atual e o tempo desejado.
- Atualização contínua com `requestAnimationFrame`.

Importante: o cliente aprovou explicitamente a fluidez dessa animação. Evitar alterar essa implementação.

## 8. Arquivos principais

```text
index.html     Estrutura e conteúdo da página
style.css     Estilos originais compartilhados
mark2.css     Nova direção de arte, Helvetica, vídeos e modais
main.js       Scroll do vídeo, animações, modais e formulário
package.json  Scripts do projeto
vite.config.js Configuração de caminhos relativos
assets/       Fontes, imagens e vídeos
dist/         Build publicado
```

`lineup.css` é um arquivo remanescente da versão anterior e não está carregado pelo HTML atual.

## 9. Como executar localmente

```bash
cd "/Users/haliaagent/Downloads/DATABASE AGENTES/JXO/mark2"
npm install
npm run dev -- --host 127.0.0.1
```

Abrir:

```text
http://127.0.0.1:5173/
```

## 10. Como gerar o build

```bash
cd "/Users/haliaagent/Downloads/DATABASE AGENTES/JXO/mark2"
npm run build
```

O build é gerado em:

```text
mark2/dist/
```

O projeto usa caminhos relativos (`base: './'`) para funcionar corretamente no GitHub Pages.

## 11. Deploy atual

### Site publicado

https://felipeboladao041.github.io/jxo-a5-landing/

### Repositório

https://github.com/FELIPEBOLADAO041/jxo-a5-landing

### Conta utilizada

```text
FELIPEBOLADAO041
```

### Configuração do GitHub Pages

- Repositório público.
- Código-fonte na branch `main`.
- Build publicado na branch `gh-pages`.
- GitHub Pages configurado para servir a raiz da branch `gh-pages`.
- HTTPS ativado.

### Último deploy validado

- Página: status HTTP `200`.
- CSS: status HTTP `200`.
- Vídeo da hero: status HTTP `200`.
- Build publicado com aproximadamente 15 MB.

## 12. Como publicar futuras alterações

Após editar e validar localmente:

```bash
cd "/Users/haliaagent/Downloads/DATABASE AGENTES/JXO/mark2"
npm run build
git add .
git commit -m "descrição da alteração"
git push origin main
git subtree push --prefix dist origin gh-pages
```

Se o último comando informar que a branch está desatualizada ou rejeitar o envio, publicar o conteúdo de `dist` novamente por uma branch temporária ou atualizar a branch `gh-pages` com cuidado. Não usar comandos destrutivos sem revisar o estado do repositório.

## 13. Git e arquivos ignorados

O diretório `mark2` possui seu próprio repositório Git, isolado do repositório existente em `/Users/haliaagent`.

O `.gitignore` exclui:

- `node_modules/`
- `.DS_Store`
- Logs.
- PNGs originais muito pesados.
- Vídeos antigos não utilizados.

## 14. Pendências e próximos passos possíveis

- Revisar a copy final com o cliente.
- Confirmar se a afirmação de `99,9% de acerto` será mantida ou ajustada para `≥99%`, conforme o catálogo técnico.
- Integrar o formulário a um CRM ou endpoint real.
- Adicionar máscara e validação ao campo de WhatsApp.
- Adicionar política de privacidade e adequação à LGPD.
- Configurar domínio próprio da JXO.
- Adicionar métricas de conversão, Google Analytics, Google Ads e Meta Pixel.
- Inserir favicon e metadados sociais Open Graph.
- Testar em celulares físicos e conexões móveis mais lentas.
- Confirmar dados legais, endereço e razão social antes da publicação definitiva em domínio oficial.

## 15. Observações importantes

- A versão `LANDING PAGE` deve continuar preservada.
- Todo novo trabalho deve partir de `mark2`.
- Não modificar o comportamento do vídeo da hero sem solicitação explícita.
- Manter a A5 como produto principal.
- Outros modelos devem funcionar como apoio à qualificação, não competir com a oferta principal.
- A direção atual privilegia fundos claros, Helvetica e uma estética tecnológica mais limpa.

