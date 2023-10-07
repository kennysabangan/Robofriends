interface ScrollProps {
    children: JSX.Element;
}

const Scroll: React.FC<ScrollProps> = ({ children })  => {
    return (
        <div style={{ overflowY: 'scroll', height: '80vh' }}>
            {children}
        </div>
    );
}

export default Scroll;