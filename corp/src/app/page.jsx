"use client";
import React from "react";

function MainComponent() {
  const [selectedCrypto, setSelectedCrypto] = useState("CSM");
  const [cryptoPrices, setCryptoPrices] = useState([
    { name: "CosmosCoin", symbol: "CSM", price: "12,345.67", change: "+2.34" },
    { name: "QuantumToken", symbol: "QTM", price: "8,901.23", change: "-1.45" },
    { name: "NovaCash", symbol: "NVC", price: "567.89", change: "+3.21" },
    { name: "StardustPay", symbol: "SDP", price: "234.56", change: "-0.98" },
    { name: "LunarChain", symbol: "LNC", price: "789.01", change: "+4.32" },
  ]);
  const [performanceData] = useState({
    CSM: [
      { value: 45, month: "Jan" },
      { value: 72, month: "Fev" },
      { value: 63, month: "Mar" },
      { value: 89, month: "Abr" },
      { value: 92, month: "Mai" },
      { value: 78, month: "Jun" },
      { value: 85, month: "Jul" },
      { value: 67, month: "Ago" },
      { value: 73, month: "Set" },
      { value: 88, month: "Out" },
      { value: 95, month: "Nov" },
      { value: 82, month: "Dez" },
    ],
    QTM: [
      { value: 58, month: "Jan" },
      { value: 63, month: "Fev" },
      { value: 75, month: "Mar" },
      { value: 82, month: "Abr" },
      { value: 79, month: "Mai" },
      { value: 88, month: "Jun" },
      { value: 92, month: "Jul" },
      { value: 86, month: "Ago" },
      { value: 77, month: "Set" },
      { value: 83, month: "Out" },
      { value: 89, month: "Nov" },
      { value: 94, month: "Dez" },
    ],
    NVC: [
      { value: 42, month: "Jan" },
      { value: 58, month: "Fev" },
      { value: 67, month: "Mar" },
      { value: 73, month: "Abr" },
      { value: 85, month: "Mai" },
      { value: 78, month: "Jun" },
      { value: 82, month: "Jul" },
      { value: 88, month: "Ago" },
      { value: 93, month: "Set" },
      { value: 87, month: "Out" },
      { value: 91, month: "Nov" },
      { value: 86, month: "Dez" },
    ],
  });
  const [selectedTab, setSelectedTab] = useState("monthly");
  const plans = {
    monthly: [
      {
        name: "Básico",
        price: "R$99",
        features: ["Análises Básicas", "Suporte por Email", "5 Trades por Dia"],
      },
      {
        name: "Pro",
        price: "R$199",
        features: [
          "Análises Avançadas",
          "Suporte Prioritário",
          "Trades Ilimitados",
        ],
      },
      {
        name: "Enterprise",
        price: "R$399",
        features: ["IA Personalizada", "Suporte 24/7", "API Dedicada"],
      },
    ],
    yearly: [
      {
        name: "Básico",
        price: "R$999",
        features: ["Análises Básicas", "Suporte por Email", "5 Trades por Dia"],
      },
      {
        name: "Pro",
        price: "R$1999",
        features: [
          "Análises Avançadas",
          "Suporte Prioritário",
          "Trades Ilimitados",
        ],
      },
      {
        name: "Enterprise",
        price: "R$3999",
        features: ["IA Personalizada", "Suporte 24/7", "API Dedicada"],
      },
    ],
  };
  const steps = [
    {
      icon: "fa-user-plus",
      title: "Crie sua Conta",
      desc: "Processo simples e rápido",
    },
    {
      icon: "fa-wallet",
      title: "Deposite Fundos",
      desc: "Métodos seguros de pagamento",
    },
    {
      icon: "fa-chart-line",
      title: "Comece a Investir",
      desc: "Com suporte de IA",
    },
  ];
  const currentPerformanceData = performanceData[selectedCrypto] || [];
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    try {
      if (email === "test@test.com" && password === "password") {
        setIsLoggedIn(true);
        setShowLoginModal(false);
        setEmail("");
        setPassword("");
      } else {
        setError("Email ou senha inválidos");
      }
    } catch (err) {
      setError("Ocorreu um erro ao fazer login");
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1c34] to-[#0d0f23] text-white">
      <nav className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 space-y-4 sm:space-y-0">
        <div className="flex items-center">
          <i className="fas fa-cube text-[#00ff88] text-2xl sm:text-3xl mr-2"></i>
          <h1 className="text-xl sm:text-2xl font-bold font-poppins">
            Dellivier Corp
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-poppins">
          <button className="hover:text-[#00ff88] text-sm sm:text-base">
            Início
          </button>
          <button className="hover:text-[#00ff88] text-sm sm:text-base">
            Sobre
          </button>
          <button className="hover:text-[#00ff88] text-sm sm:text-base">
            Preços
          </button>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-red-600 text-sm sm:text-base"
            >
              Sair
            </button>
          ) : (
            <button
              onClick={() => setShowLoginModal(true)}
              className="bg-[#00ff88] text-[#1a1c34] px-3 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-[#00dd77] text-sm sm:text-base"
            >
              Entrar
            </button>
          )}
        </div>
      </nav>
      <div className="overflow-x-auto w-full py-3 sm:py-4 bg-[#252847]">
        <div className="flex gap-6 sm:gap-8 animate-scroll px-4 whitespace-nowrap">
          {cryptoPrices.map((crypto) => (
            <div
              key={crypto.symbol}
              className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
            >
              <i className="fab fa-bitcoin text-[#00ff88]"></i>
              <span className="font-medium">{crypto.name}</span>
              <span>R${crypto.price}</span>
              <span
                className={
                  crypto.change.startsWith("+")
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {crypto.change}%
              </span>
            </div>
          ))}
        </div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-5xl font-bold font-poppins mb-4 sm:mb-6">
            Invista de Forma Inteligente em{" "}
            <span className="text-[#00ff88] animate-pulse inline-block">
              Crypto
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-poppins px-4">
            Junte-se a milhares de investidores que confiam na Dellivier Corp
            para navegar no mercado de criptomoedas e multiplicar seu patrimônio
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          <div className="bg-[#252847] p-4 sm:p-6 rounded-xl transform hover:scale-105 transition-transform">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 font-poppins">
              Visão do Mercado
            </h3>
            <div className="overflow-hidden">
              {cryptoPrices.map((crypto) => (
                <div
                  key={crypto.symbol}
                  className="flex justify-between items-center p-3 sm:p-4 hover:bg-[#1e2035] rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <i className="fab fa-bitcoin text-[#00ff88]"></i>
                    <div>
                      <p className="font-medium text-sm sm:text-base">
                        {crypto.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {crypto.symbol}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm sm:text-base">
                      R${crypto.price}
                    </p>
                    <p
                      className={`text-xs sm:text-sm ${
                        crypto.change.startsWith("+")
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {crypto.change}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#252847] p-4 sm:p-6 rounded-xl transform hover:scale-105 transition-transform">
            <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4 sm:gap-0">
              <h3 className="text-xl sm:text-2xl font-bold font-poppins">
                Melhores Desempenhos
              </h3>
              <select
                value={selectedCrypto}
                onChange={(e) => setSelectedCrypto(e.target.value)}
                className="bg-[#1e2035] border-none rounded-lg px-3 sm:px-4 py-1 sm:py-2 text-[#00ff88] focus:outline-none focus:ring-2 focus:ring-[#00ff88] text-sm sm:text-base"
              >
                <option value="CSM">CosmosCoin</option>
                <option value="QTM">QuantumToken</option>
                <option value="NVC">NovaCash</option>
              </select>
            </div>
            <div className="h-[300px] sm:h-[400px] bg-[#1e2035] rounded-lg p-4 relative">
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-700"></div>
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gray-700"></div>
              <div className="w-full h-full flex items-end justify-between gap-1 sm:gap-2 relative pt-8 pb-8">
                {currentPerformanceData.map((data, index) => (
                  <div
                    key={index}
                    className="relative group flex-1 flex flex-col items-center"
                  >
                    <div
                      className="w-4 sm:w-8 bg-gradient-to-t from-[#00ff88] to-[#00ff8866] rounded-t-sm transition-all duration-500 cursor-pointer relative"
                      style={{ height: `${data.value}%`, minHeight: "4px" }}
                    >
                      <div className="opacity-0 group-hover:opacity-100 absolute -top-16 left-1/2 transform -translate-x-1/2 bg-[#1a1c34] text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm whitespace-nowrap transition-opacity">
                        <div className="font-bold">{data.value}%</div>
                        <div className="text-xs text-gray-400">
                          {data.month}
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[#1a1c34] rotate-45"></div>
                      </div>
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-400 mt-2">
                      {data.month}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16 sm:mb-24 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 font-poppins">
            Como Funciona
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-[#252847] p-6 sm:p-8 rounded-xl text-center relative animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#00ff88] rounded-full flex items-center justify-center text-[#1a1c34] animate-pulse">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mt-4 mb-2 font-poppins">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 sm:mb-24 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 font-poppins">
            Planos e Preços
          </h2>
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="bg-[#252847] p-1 rounded-lg">
              <button
                onClick={() => setSelectedTab("monthly")}
                className={`px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base ${
                  selectedTab === "monthly" ? "bg-[#00ff88] text-[#1a1c34]" : ""
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setSelectedTab("yearly")}
                className={`px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base ${
                  selectedTab === "yearly" ? "bg-[#00ff88] text-[#1a1c34]" : ""
                }`}
              >
                Anual
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {plans[selectedTab].map((plan, index) => (
              <div
                key={index}
                className="bg-[#252847] p-6 sm:p-8 rounded-xl text-center hover:scale-105 transition-transform"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 font-poppins">
                  {plan.name}
                </h3>
                <p className="text-3xl sm:text-4xl font-bold text-[#00ff88] mb-6 sm:mb-8">
                  {plan.price}
                </p>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <i className="fas fa-check text-[#00ff88]"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => {
                    setSelectedPlan(plan);
                    setShowPaymentModal(true);
                  }}
                  className="w-full bg-[#00ff88] text-[#1a1c34] py-2 sm:py-3 rounded-lg font-bold hover:bg-[#00dd77] text-sm sm:text-base"
                >
                  Escolher Plano
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          <div className="bg-[#252847] p-4 sm:p-6 rounded-xl text-center">
            <i className="fas fa-shield-alt text-[#00ff88] text-3xl sm:text-4xl mb-4"></i>
            <h3 className="text-lg sm:text-xl font-bold mb-2 font-poppins">
              Plataforma Segura
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Medidas avançadas de segurança para proteger seus investimentos
            </p>
          </div>
          <div className="bg-[#252847] p-4 sm:p-6 rounded-xl text-center">
            <i className="fas fa-brain text-[#00ff88] text-3xl sm:text-4xl mb-4"></i>
            <h3 className="text-lg sm:text-xl font-bold mb-2 font-poppins">
              Análise com IA
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Insights inteligentes para ajudar em suas decisões
            </p>
          </div>
          <div className="bg-[#252847] p-4 sm:p-6 rounded-xl text-center">
            <i className="fas fa-clock text-[#00ff88] text-3xl sm:text-4xl mb-4"></i>
            <h3 className="text-lg sm:text-xl font-bold mb-2 font-poppins">
              Suporte 24/7
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Assistência integral para suas necessidades de trading
            </p>
          </div>
        </div>
        <div className="text-center px-4">
          <button className="bg-[#00ff88] text-[#1a1c34] text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#00dd77] font-bold font-poppins animate-pulse">
            Comece a Negociar Agora
          </button>
        </div>
      </main>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-[#252847] rounded-xl p-8 w-full max-w-md border border-[#00ff88]/20 shadow-lg shadow-[#00ff88]/10">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold font-poppins text-[#00ff88]">
                  Bem-vindo
                </h3>
                <p className="text-gray-400 text-sm mt-1">Entre na sua conta</p>
              </div>
              <button
                onClick={() => {
                  setShowLoginModal(false);
                  setError("");
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm flex items-center">
                  <i className="fas fa-exclamation-circle mr-2"></i>
                  {error}
                </div>
              )}
              <div>
                <label
                  className="block text-sm font-medium mb-2 text-gray-300"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <i className="fas fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#1e2035] border border-gray-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff88] focus:border-transparent transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label
                    className="text-sm font-medium text-gray-300"
                    htmlFor="password"
                  >
                    Senha
                  </label>
                  <a
                    href="#"
                    className="text-sm text-[#00ff88] hover:text-[#00dd77] transition-colors"
                  >
                    Esqueceu a senha?
                  </a>
                </div>
                <div className="relative">
                  <i className="fas fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#1e2035] border border-gray-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff88] focus:border-transparent transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#00ff88] text-[#1a1c34] py-3 rounded-lg font-bold hover:bg-[#00dd77] transition-colors text-sm uppercase tracking-wider"
              >
                ENTRAR
              </button>
              <div className="text-center text-sm text-gray-400">
                Ainda não tem uma conta?{" "}
                <a
                  href="#"
                  className="text-[#00ff88] hover:text-[#00dd77] transition-colors font-medium"
                >
                  Cadastre-se agora
                </a>
              </div>
            </form>
          </div>
        </div>
      )}

      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-[#252847] rounded-xl p-8 w-full max-w-md border border-[#00ff88]/20 shadow-lg shadow-[#00ff88]/10">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold font-poppins text-[#00ff88]">
                  Pagamento
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Plano {selectedPlan?.name} - {selectedPlan?.price}
                </p>
              </div>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 p-3 bg-[#1e2035] rounded-lg hover:bg-[#2a2d4a] transition-colors"
                >
                  <i className="fab fa-cc-visa text-2xl text-blue-400"></i>
                  <span className="text-sm">Cartão</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 p-3 bg-[#1e2035] rounded-lg hover:bg-[#2a2d4a] transition-colors"
                >
                  <i className="fab fa-pix text-2xl text-[#32bcad]"></i>
                  <span className="text-sm">Pix</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 p-3 bg-[#1e2035] rounded-lg hover:bg-[#2a2d4a] transition-colors"
                >
                  <i className="fab fa-bitcoin text-2xl text-[#f7931a]"></i>
                  <span className="text-sm">Crypto</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 p-3 bg-[#1e2035] rounded-lg hover:bg-[#2a2d4a] transition-colors"
                >
                  <i className="fas fa-money-bill-wave text-2xl text-green-500"></i>
                  <span className="text-sm">Boleto</span>
                </button>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Número do Cartão
                </label>
                <div className="relative">
                  <i className="fas fa-credit-card absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    name="card"
                    className="w-full bg-[#1e2035] border border-gray-700 rounded-lg px-10 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff88] focus:border-transparent transition-all"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Validade
                  </label>
                  <input
                    type="text"
                    name="expiry"
                    className="w-full bg-[#1e2035] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff88] focus:border-transparent transition-all"
                    placeholder="MM/AA"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    CVV
                  </label>
                  <input
                    type="text"
                    name="cvv"
                    className="w-full bg-[#1e2035] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00ff88] focus:border-transparent transition-all"
                    placeholder="123"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#00ff88] text-[#1a1c34] py-3 rounded-lg font-bold hover:bg-[#00dd77] transition-colors text-sm uppercase tracking-wider"
              >
                Pagar {selectedPlan?.price}
              </button>
            </form>
          </div>
        </div>
      )}

      <footer className="border-t border-[#252847] mt-16 sm:mt-24 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center text-gray-400 text-sm sm:text-base">
          <p>© 2024 Dellivier Corp. Todos os direitos reservados.</p>
        </div>
      </footer>
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.8s ease-out forwards;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;