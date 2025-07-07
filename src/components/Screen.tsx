import { PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";
import { Box, BoxProps } from "./Box";

// PropsWithChildren = Informa que esse componente receberá um filho
// BoxProps = todas as propriedades do Box

// scrollable: boolean = se minha tela será scroll ou não

export function Screen({
  children,
  scrollable = false,
  ...boxProps
}: PropsWithChildren & BoxProps & { scrollable?: boolean }) {
  const Container = scrollable ? ScrollView : View;

  return (
    <Box
      flex={1}
      backgroundColor="background"
      paddingHorizontal="padding"
      {...boxProps}
    >
      <Container>{children}</Container>
    </Box>
  );
}
