interface FooterProps {
    className?: string
}

const Footer = ({ className }: FooterProps) => {
    return (
        <footer className={`${className}bg-main w-full h-[70px] flex items-center justify-center text-white font-josefineSans font-bold text-xl`}>
            A cuidarse &#10084;
        </footer>
    );
}

export default Footer;