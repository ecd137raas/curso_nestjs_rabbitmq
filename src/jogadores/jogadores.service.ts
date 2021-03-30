import { Injectable, Logger } from '@nestjs/common';
import { v4 as uuid} from 'uuid';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface'

@Injectable()
export class JogadoresService {
    private jogadores: Jogador[] = [];
    private readonly logger = new Logger(JogadoresService.name)

    async criarAtualizarJogador(CriarJogadorDto: CriarJogadorDto): Promise<void>{
        this.criar(CriarJogadorDto);

    }

    async consultarTodosJogadores(): Promise<Jogador[]>{
        return await this.jogadores
    }

    private criar(criaJogadorDto:CriarJogadorDto): void {
        const {nome, telefoneCelular, email} = criaJogadorDto
        const jogador: Jogador = {
            _id: uuid(),
            nome,
            telefoneCelular,
            email,
            ranking: 'A',
            posicaoRanking: 1,
            urlFotoJogador:'www.google.com/foto123.jpg'
        };
        this.logger.log(`criaJogadorDto: ${JSON.stringify(jogador)}`)
        this.jogadores.push(jogador);
    }
}
