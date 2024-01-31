import styled from "@emotion/styled";
import { usePathname,redirect } from 'next/navigation';
// import { useRouter } from "next/router";
import React from "react";


export default function Breadcrumb({ nodeRoots, ...rest }: { nodeRoots: React.ReactNode, [x:string]:any}) {
    
    const pathname = usePathname();
    // const router = useRouter();


    const handleLinkClick = (path: string) => {
        console.log(`---- ${path}`);
        redirect(`${path}`)
    };

    return (
        <BreadcrumbContainer {...rest}>
            <Ul>
                {pathname.split('/').slice(1).map((slugName, index, segments) => {
                    const path = `/${segments.slice(0, index + 1).join('/')}`;

                    return (
                        <Li className="text-primary" key={path}>
                            <Link onClick={() => handleLinkClick(path)}>{' /'} {slugName}</Link>
                        </Li>
                    );
                })}
            </Ul>
        </BreadcrumbContainer>
    );
}

const BreadcrumbContainer = styled.div(props => ({
    display: 'flex',
    margin: '0px',
}));

const Ul = styled.ul(props => ({
    display: 'flex',
    padding: '0px',
}));

const Li = styled.li(props => ({
    display: 'flex',
}));

const Link = styled.a(props => ({
    textDecoration: 'none',
    cursor: 'pointer',
}));