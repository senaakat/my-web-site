import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({
                                       to,
                                       children,
                                       className,
                                       exact = true,
                                   }) {
    const pathname = usePathname();

    const isActive = exact
        ? pathname === to
        : pathname.startsWith(to);

    const resolvedClassName =
        typeof className === "function"
            ? className({ isActive })
            : className;

    const resolvedChildren =
        typeof children === "function"
            ? children({ isActive })
            : children;

    return (
        <Link href={to} className={resolvedClassName}>
            {resolvedChildren}
        </Link>
    );
}
