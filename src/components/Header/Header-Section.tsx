import { useButtonStore } from "@/contexts/ActiveButtonStore";
import { ScrollContext } from "@/contexts/ScrollContext";
import { Button } from "@mantine/core"
import { useHover } from "@mantine/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";

type HeaderSectionProps = {
    button: { label: string, id: string };
    onClose: () => void;
}

const HeaderSection = ({ button, onClose }: HeaderSectionProps) => {
    const { ref, hovered } = useHover<HTMLButtonElement>();
    const { handleClick } = useContext(ScrollContext);

    const handleButtonClick = (id: string) => {
        // scroll function
        handleClick(id)
        onClose()
    }

    return (
        <Button
            variant="transparent"
            style={{
                fontWeight: 'semibold',
                fontSize: '1em',
                color: hovered ? 'rgb(26, 247, 169)' : 'white',
            }}
            ref={ref}
            onClick={() => handleButtonClick(button.id)}
        >
            {button.label}
        </Button>
    )
}

export default HeaderSection