interface BlurringProps {
    children: React.ReactNode;
}

export default function Blurring({ children }: BlurringProps) {
    return (
        <div className="relative">
            <div
                className="absolute bg-primary opacity-60 blur-[60px]"
                style={{
                    width: "100%",
                    height: "100%",
                    maxWidth: "400px",
                    maxHeight: "350px",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            />

            <div className="relative">{children}</div>
        </div>
    );
}
