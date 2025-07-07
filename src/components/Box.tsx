// Box é como se fosse a View
import { createBox } from "@shopify/restyle";
import { Theme } from "../theme/theme";

export const Box = createBox<Theme>();

// extrair as propriedades do meu componente Box
export type BoxProps = React.ComponentProps<typeof Box>;
