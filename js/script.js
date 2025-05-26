// Funções comuns para todas as páginas
function formatarNota(nota) {
    return nota.toFixed(2);
}

function obterMensagem(nota) {
    if (nota === 10) {
        return "Gabaritou! Encontramos nosso 01!";
    } else if (nota >= 9 && nota < 10) {
        return "Excelente nota!";
    } else if (nota >= 8 && nota < 9) {
        return "Ótima nota!";
    } else if (nota >= 7.5 && nota < 8) {
        return "Boa nota!";
    } else if (nota >= 7 && nota < 7.5) {
        return "Parabéns! Você passou";
    } else if (nota >= 6.8 && nota < 7) {
        return "Calma, provavelmente vão te passar";
    } else if (nota >= 3 && nota < 6.8) {
        return "Prova final, boa sorte!";
    } else {
        return "Reprovado, Med66 te recebe de braços abertos!";
    }
}

// Função para verificar se o aluno já passou com as notas atuais
function verificarAprovacaoAutomatica(pontosObtidos, pesoTotal, pesoFaltando) {
    // Se não há peso faltando, não há como verificar aprovação automática
    if (pesoFaltando <= 0) return false;
	console.log(pontosObtidos, pesoTotal, pesoFaltando);
    
    // Calcular a média atual considerando 0 em todas as notas faltantes
    const mediaAtual = pontosObtidos / (pesoTotal - pesoFaltando);
    
    // Calcular a média final se tirar 0 em todas as notas faltantes
    const mediaFinalComZero = pontosObtidos / pesoTotal;
    
    // Se mesmo tirando 0 em todas as notas faltantes a média final for >= 7, o aluno já passou
    return mediaFinalComZero >= 7;
}

function limparCampos() {
    // Obter todos os inputs do formulário
    const inputs = document.querySelectorAll('input[type="number"]');
    
    // Limpar cada input
    inputs.forEach(input => {
        input.value = '';
    });
    
    // Esconder o resultado
    const resultado = document.getElementById('resultado');
    resultado.style.display = 'none';
}

// NOVO - Adicionar ao js/script.js para funcionalidade de expandir/recolher P2
document.addEventListener('DOMContentLoaded', function() {
    // Usa delegação de evento no corpo do documento para elementos .p2-toggle-header
    document.body.addEventListener('click', function(event) {
        const p2Header = event.target.closest('.p2-toggle-header');
        
        if (p2Header) {
            const targetDetailsId = p2Header.getAttribute('data-target-details');
            const detailsDiv = document.getElementById(targetDetailsId);
            const arrowButton = p2Header.querySelector('.expand-arrow-button'); // O botão que contém o ícone

            if (detailsDiv && arrowButton) {
                const isExpanded = detailsDiv.style.display === 'block';
                detailsDiv.style.display = isExpanded ? 'none' : 'block';
                
                // Adiciona ou remove a classe 'expanded' do botão da seta para o CSS aplicar a rotação
                if (isExpanded) {
                    arrowButton.classList.remove('expanded');
                } else {
                    arrowButton.classList.add('expanded');
                }
            }
        }
    });
});