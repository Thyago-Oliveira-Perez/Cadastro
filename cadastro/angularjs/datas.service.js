var app = angular.module("myapp", []);

app.controller("controllerApp", function ($scope, $http){

	$scope.buscarCep = function(cep){
		$http.get("https://viacep.com.br/ws/" + cep + "/json/")
			.then(function(retorno){
				$scope.logradouro = retorno.data.logradouro;
				$scope.bairro = retorno.data.bairro;
				$scope.localidade = retorno.data.localidade;
			});
	}

	var idAux = JSON.parse(localStorage.getItem('id')) || [];
	var tipoPessoaAux = JSON.parse(localStorage.getItem('tipoPessoa')) || [];
	var nomeAux = JSON.parse(localStorage.getItem('nome')) || [];
	var cpfCnpjAux = JSON.parse(localStorage.getItem('cpfCnpj')) || [];
	var nomeFantasiaAux = JSON.parse(localStorage.getItem('nomeFantasia')) || [];
	var cepAux = JSON.parse(localStorage.getItem('cep')) || [];
	var logradouroAux = JSON.parse(localStorage.getItem('logradouro')) || [];
	var bairroAux = JSON.parse(localStorage.getItem('bairro')) || [];
	var localidadeAux = JSON.parse(localStorage.getItem('localidade')) || [];
	var telefoneAux = JSON.parse(localStorage.getItem('telefone')) || [];
	var emailAux = JSON.parse(localStorage.getItem('email')) || [];

	$scope.user = [
		{id: '' ,tipoPessoa: '' ,cpfCnpj: '',nome: ''
		, nomeFantasia:'' ,cep: '',logradouro: '' ,bairro: ''
		,localidade: '' ,telefone: '',email: ''}
	];

	var lengTH = parseInt(idAux.length);

	for(i = 0; i < lengTH; i++){
		$scope.user.push({
			'id': idAux[i],
			'tipoPessoa': tipoPessoaAux[i],
			'cpfCnpj': cpfCnpjAux[i],
			'nome': nomeAux[i],
			'nomeFantasia': nomeFantasiaAux[i],
			'cep': cepAux[i],
			'logradouro': logradouroAux[i],
			'bairro': bairroAux[i],
			'localidade': localidadeAux[i],
			'telefone': telefoneAux[i],
			'email': emailAux[i],
		});
	}

	$scope.enviar = function(tipoPessoa, cpfCnpj, nome, nomeFantasia, cep, logradouro, bairro, localidade, telefone, email) {

	var range = parseInt(idAux.length);
	var id = idAux[(range-1)]
	if(id == null){
		id = 0;
	}else if(id == 0){
		id = 1;
	}
	else{
		id += 1;
	}
	idAux.push(id);
	localStorage.setItem('id', JSON.stringify(idAux));

	tipoPessoaAux.push(tipoPessoa);
	localStorage.setItem('tipoPessoa', JSON.stringify(tipoPessoaAux));

	cpfCnpjAux.push(cpfCnpj);
	localStorage.setItem('cpfCnpj', JSON.stringify(cpfCnpjAux));

	nomeAux.push(nome);
	localStorage.setItem('nome', JSON.stringify(nomeAux));

	nomeFantasiaAux.push(nomeFantasia);
	localStorage.setItem('nomeFantasia', JSON.stringify(nomeFantasiaAux));

	cepAux.push(cep);
	localStorage.setItem('cep', JSON.stringify(cepAux));

	logradouroAux.push(logradouro);
	localStorage.setItem('logradouro', JSON.stringify(logradouroAux));

	bairroAux.push(bairro);
	localStorage.setItem('bairro', JSON.stringify(bairroAux));

	localidadeAux.push(localidade);
	localStorage.setItem('localidade', JSON.stringify(localidadeAux));

	telefoneAux.push(telefone);
	localStorage.setItem('telefone', JSON.stringify(telefoneAux));

	emailAux.push(email);
	localStorage.setItem('email', JSON.stringify(emailAux));

	}

	$scope.exibir_ocultar = function (){

		var valor = $scope.tipoPessoa;
	
		if(valor == "PessoaFisica"){
			$scope.nome_fantasia = false;
		}else if(valor == "PessoaJuridica"){
			$scope.nome_fantasia = true;
		}
	};
});
