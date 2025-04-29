const modal = new window.Web3Modal({
  projectId: '8f3eb896d127f6a619e7d78b1085647f', // твой Project ID
  walletConnectVersion: 2,
  themeMode: 'dark'
});

document.getElementById('connectBtn').addEventListener('click', () => {
  modal.openModal();
});
