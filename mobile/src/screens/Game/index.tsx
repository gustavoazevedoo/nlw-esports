import { FlatList, Image, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons'

import logoImg from '../../assets/logo-nlw-esports.png';

import { THEME } from "../../theme";
import { styles } from "./styles";

import { GameParams } from "../../@types/navigation";

import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { DuoCard } from "../../components/DuoCard";
import { useEffect, useState } from "react";

export interface Duo {
  id: string;
  name: string;
  weekDays: string[],
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
  yearsPlaying: number;
}

export function Game() {
  const [duos, setDuos] = useState<Duo[]>([])

  const route = useRoute();
  const game = route.params as GameParams
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  async function loadAdsByGame(gameId: string) {
    const response = await fetch(`http://192.168.5.105:3333/games/${gameId}/ads`)
    const data = await response.json()

    setDuos(data)
  }

  useEffect(() => {
    loadAdsByGame(game.id)
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack}>
              <Entypo
                name="chevron-thin-left"
                color={THEME.COLORS.CAPTION_300}
                size={20}
              />
            </TouchableOpacity>

            <Image
              source={logoImg}
              style={styles.logo}
            />

            <View style={styles.right} />
          </View>

          <Image
            source={{ uri: game.bannerUrl }}
            style={styles.cover}
            resizeMode="cover"
          />

          <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />

          <FlatList
            data={duos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <DuoCard 
                data={item}
                onConnect={() => {}}
              />
            )}
            style={styles.containerList}
            horizontal
            contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Text style={styles.emptyListText}>
                Não há anúncios publicados ainda
              </Text>
            )}
          />
      </SafeAreaView>
    </Background>
  );
}