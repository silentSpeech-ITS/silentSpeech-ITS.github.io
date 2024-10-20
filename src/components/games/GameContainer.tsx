import { Container } from "@/components/Container";

interface GameContainerProps {
    children: React.ReactNode;
    game?: string,
  }

export function GameContainer(props: Readonly<GameContainerProps>) {
    return(
        <Container className="flex flex-wrap items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full rounded-xl border-2 border-pancho-300 shadow-[0_0px_50px_-5px] shadow-pancho-300">
                {props.children}
            </div>
            
        </Container>
    )
}