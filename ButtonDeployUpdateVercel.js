const token = 'SEU_TOKEN_DE_API_VERCEL_AQUI';
const project = 'NOME_DO_SEU_PROJETO_NA_VERCEL_AQUI';

function updateDeployVercel() {
  axios.post(`https://api.vercel.com/v12/now/deployments/${project}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(response => {
    console.log('Novo deploy criado!');
  })
  .catch(error => {
    console.error('Erro ao criar novo deploy:', error.response.data);
  });
}
