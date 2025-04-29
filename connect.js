const { createWeb3Modal, defaultWagmiConfig } = window.web3modal;
const { mainnet } = window.wagmiChains;

// Укажи сюда свой Project ID из WalletConnect Cloud
const projectId = 'ТВОЙ_PROJECT_ID'; 

const metadata = {
  name: 'My DApp',
  description: 'My decentralized app',
  url: 'https://yourwebsite.com',
  icons: ['https://yourwebsite.com/favicon.ico']
};

// Настройка сети и конфига
const chains = [mainnet];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// Создаем и сохраняем объект modal
const modal = createWeb3Modal({
  wagmiConfig,
  projectId,
  chains
});

// Нажимаем на кнопку — открывается модалка выбора кошелька
document.getElementById('connectWallet').addEventListener('click', () => {
  modal.open();
});
