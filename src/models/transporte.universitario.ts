import mongoose from 'mongoose';
const Schema = mongoose.Schema

const transporte_universitario = new Schema(
    {
        nome: String,
        endereco: String,
        telefone: String,
        email: String,
        cpf: String,
        ano_semestre: String,
        valor: {
            valor: String,
            porcentagemDesconto: String,
            dataVencimento: String
        },
        turno: {
            nome: String
        },
        cidade: {
            nome: String
        },
        estado: {
            nome: String
        },
        cursos: [{
            nome: String,
            nome_coordenador: String,
            tipo_curso: {
                nome: String
            },
            campus: {
                nome: String,
                endereco: String,
                telefone: String,
                cidade: {
                    nome: String
                },
                estado: {
                    nome: String
                }
            }
        }],
        roteiros: [{
            nome: String,
            horario_saida: String,
            horario_chegada: String,
            tipo_roteiro: {
                nome: String
            },
            cidadeOrigem: {
                nome: String
            },
            estadoOrigem: {
                nome: String
            },
            cidadeDestino: {
                nome: String
            },
            estadoDestino: {
                nome: String
            },
            onibus: [{
                quantidade_assentos: String,
                modelo: String,
                ano_fabricacao: String,
                empresa_onibus: {
                    nome: String,
                    cnpj: String,
                    endereco: String,
                    telefone: String,
                    cidade: {
                        nome: String
                    },
                    estado: {
                        nome: String
                    }
                }
            }]
        }]
    }

)

const TransporteUniversitario = mongoose.model('transporte_universitario', transporte_universitario, 'transporte_universitario')

export default TransporteUniversitario;
