import { Text, TouchableOpacity, View } from "react-native";
import { GameController } from 'phosphor-react-native'

import { Duo } from "../../screens/Game";
import { THEME } from "../../theme";
import { DuoInfo } from "../DuoInfo";
import { styles } from "./styles";

interface DuoCardProps {
  data: Duo,
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: DuoCardProps) {
  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value={data.name}
      />

      <DuoInfo
        label="Tempo de jogo"
        value={`${data.yearsPlaying} ano(s)`}
      />

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias · ${data.hourStart}h - ${data.hourEnd}h`}
      />

      <DuoInfo
        label="Chamada de áudio"
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity 
        style={styles.button} 
        onPress={onConnect}
      >
        <GameController 
          color={THEME.COLORS.TEXT}
          size={20}
        />
        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>
    </View>
  );
}