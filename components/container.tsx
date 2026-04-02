
interface ContainerProps {
    children: React.ReactNode
}

const ContainerPage = (props: ContainerProps) => {
    const { children } = props

    return (
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20">
            {children}
        </div>
    );
}

export default ContainerPage;
