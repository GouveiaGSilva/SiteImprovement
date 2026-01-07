
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Legal() {
    return (
        <div className="min-h-screen bg-background text-zinc-200">
            <Navbar />

            <main className="max-w-4xl mx-auto px-6 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* INÍCIO DA POLÍTICA DE PRIVACIDADE */}
                    <section id="politica-privacidade" className="mb-20">
                        <h2 className="text-3xl font-bold text-white mb-6">Política de Privacidade da IvoxScale</h2>
                        <p className="mb-4 text-zinc-400"><strong>Última atualização:</strong> 07 de Janeiro de 2026</p>

                        <p className="mb-4">
                            A <strong>IvoxScale</strong> ("nós", "nosso") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações ao utilizar nosso site <strong>ivoxscale.com</strong> e nosso aplicativo. Estamos em conformidade com a Lei Geral de Proteção de Dados (LGPD - Brasil), o Regulamento Geral sobre a Proteção de Dados (GDPR - Europa) e os Termos da Plataforma Meta.
                        </p>

                        <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Coleta de Dados</h3>
                        <p className="mb-4">Coletamos informações das seguintes formas:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Dados Fornecidos pelo Usuário:</strong> Informações que você insere voluntariamente ao criar uma conta ou entrar em contato conosco (ex: nome, e-mail).</li>
                            <li><strong>Dados Coletados Automaticamente via Terceiros (Meta/Facebook/Instagram):</strong> Ao utilizar o login social ou conectar sua conta do Facebook/Instagram, coletamos estritamente os dados permitidos pela API do Meta para o funcionamento do serviço:
                                <ul className="list-circle pl-6 mt-2 space-y-1">
                                    <li>Endereço de e-mail;</li>
                                    <li>Nome de usuário (@usuario);</li>
                                    <li>ID de usuário da plataforma.</li>
                                </ul>
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Uso dos Dados</h3>
                        <p className="mb-4">Utilizamos as informações coletadas para as seguintes finalidades:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Autenticação e Segurança:</strong> Para identificar você e garantir o acesso seguro à sua conta.</li>
                            <li><strong>Fornecimento do Serviço:</strong> Para operar as funcionalidades principais do IvoxScale, incluindo a criação de sistemas de automações de vídeo e gestão de ativos digitais.</li>
                            <li><strong>Melhoria da Experiência:</strong> Para personalizar o conteúdo e melhorar a usabilidade da nossa plataforma.</li>
                            <li><strong>Comunicação:</strong> Para enviar atualizações importantes sobre o serviço, avisos técnicos e suporte.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Compartilhamento de Dados</h3>
                        <p className="mb-4"><strong>Não vendemos seus dados pessoais.</strong> O compartilhamento de informações ocorre estritamente nas seguintes situações:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Prestadores de Serviço:</strong> Compartilhamos dados com fornecedores de infraestrutura confiáveis (como servidores de hospedagem e serviços de banco de dados) necessários para manter o IvoxScale online.</li>
                            <li><strong>Obrigação Legal:</strong> Se exigido por lei, ordem judicial ou regulamentação governamental aplicável.</li>
                        </ul>

                        <div className="bg-blue-900/10 p-6 border-l-4 border-blue-500 my-8 rounded-r-lg">
                            <h3 className="text-xl font-semibold text-white mb-4">4. Instruções para Exclusão de Dados (Data Deletion)</h3>
                            <p className="mb-4">Em conformidade com os requisitos da Plataforma Meta e as leis de proteção de dados (LGPD/GDPR), você tem o direito solicitar a exclusão total dos seus dados dos nossos servidores.</p>
                            <p className="mb-4"><strong>Como solicitar a exclusão:</strong></p>
                            <ol className="list-decimal pl-6 mb-4 space-y-2">
                                <li>Acesse a área de "Configurações" ou "Perfil" dentro da plataforma IvoxScale e utilize a opção "Excluir Conta"; OU</li>
                                <li>Envie um e-mail com o assunto "Solicitação de Exclusão de Dados" para <strong>contato@ivoxscale.com</strong> enviando do mesmo endereço de e-mail cadastrado.</li>
                            </ol>
                            <p>Após a solicitação, seus dados serão removidos permanentemente de nossa base ativa em até 30 dias, exceto dados que somos obrigados a manter por lei.</p>
                        </div>

                        <h3 className="text-xl font-semibold text-white mt-8 mb-4">5. Cookies e Tecnologias de Rastreamento</h3>
                        <p className="mb-4">Utilizamos cookies para melhorar o desempenho do site e memorizar suas preferências. Você pode configurar seu navegador para recusar cookies, mas isso pode limitar algumas funcionalidades da plataforma.</p>

                        <h3 className="text-xl font-semibold text-white mt-8 mb-4">6. Contato</h3>
                        <p className="mb-4">Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>E-mail:</strong> contato@ivoxscale.com</li>
                            <li><strong>Site:</strong> ivoxscale.com</li>
                        </ul>
                    </section>
                    {/* FIM DA POLÍTICA DE PRIVACIDADE */}

                    <hr className="my-16 border-zinc-800" />

                    {/* INÍCIO DOS TERMOS DE USO */}
                    <section id="termos-uso">
                        <h2 className="text-3xl font-bold text-white mb-6">Termos de Uso da IvoxScale</h2>
                        <p className="mb-4 text-zinc-400"><strong>Última atualização:</strong> 07 de Janeiro de 2026</p>

                        <h3 className="text-xl font-semibold text-white mt-8 mb-4">1. Aceitação dos Termos</h3>
                        <p className="mb-4">
                            Ao acessar ou utilizar a plataforma <strong>IvoxScale</strong> (ivoxscale.com), você concorda irrestritamente com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
                        </p>

                        <h3 className="text-xl font-semibold text-white mt-8 mb-4">2. Uso Aceitável</h3>
                        <p className="mb-4">Você concorda em utilizar nossos serviços apenas para fins legais. É estritamente proibido:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Utilizar a plataforma para enviar spam, e-mails não solicitados ou realizar automações abusivas;</li>
                            <li>Violar direitos autorais, marcas registradas ou outros direitos de propriedade intelectual de terceiros;</li>
                            <li>Tentar violar a segurança do sistema, realizar engenharia reversa ou interferir na infraestrutura da IvoxScale;</li>
                            <li>Utilizar o serviço para promover discurso de ódio, violência ou atividades ilegais.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mt-8 mb-4">3. Propriedade Intelectual</h3>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Da IvoxScale:</strong> Todo o software, design, código-fonte, logotipos e infraestrutura da plataforma são propriedade exclusiva da IvoxScale.</li>
                            <li><strong>Do Usuário:</strong> Você mantém todos os direitos de propriedade sobre o conteúdo que cria, envia ou gera através da nossa plataforma (ex: vídeos, roteiros). Você nos concede uma licença limitada apenas para hospedar e processar esse conteúdo conforme necessário para o funcionamento do serviço.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mt-8 mb-4">4. Limitação de Responsabilidade</h3>
                        <p className="mb-4">A IvoxScale fornece o serviço "como está". Não garantimos que o serviço será ininterrupto ou livre de erros. Além disso:</p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Integração com Meta/Facebook:</strong> Nossos serviços dependem das APIs do Meta. Não nos responsabilizamos por falhas, instabilidades, mudanças de políticas ou interrupções causadas pela plataforma Meta (Facebook/Instagram).</li>
                            <li>Não nos responsabilizamos por danos indiretos, incidentais ou consequentes decorrentes do uso ou incapacidade de usar nosso serviço.</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mt-8 mb-4">5. Rescisão</h3>
                        <p className="mb-4">Reservamo-nos o direito de suspender ou encerrar sua conta imediatamente, sem aviso prévio, caso você viole estes Termos de Uso, especialmente as cláusulas de Uso Aceitável.</p>

                        <h3 className="text-xl font-semibold text-white mt-8 mb-4">6. Alterações nos Termos</h3>
                        <p className="mb-4">Podemos atualizar estes termos periodicamente. O uso contínuo do serviço após as alterações constitui aceitação dos novos termos.</p>

                        <h3 className="text-xl font-semibold text-white mt-8 mb-4">7. Foro e Legislação</h3>
                        <p className="mb-4">Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida no foro da comarca da sede da empresa.</p>
                    </section>
                    {/* FIM DOS TERMOS DE USO */}
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}
