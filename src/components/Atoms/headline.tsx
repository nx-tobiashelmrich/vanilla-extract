import { headlineText } from "./headline.css.ts";

interface Tags {
    tag: string;
    children: any;
}



export function Headline({tag, children}: Tags) {
    switch(tag) {
        case 'h2':
            return <h2 className={headlineText}>{children}</h2>
        case 'h3':
            return <h3 className={headlineText}>{children}</h3>
        case 'h4':
            return <h4 className={headlineText}>{children}</h4>
        case 'h5':
            return <h5 className={headlineText}>{children}</h5>
        case 'h6':
            return <h6 className={headlineText}>{children}</h6>
        default:
            return <h1 className={headlineText}>{children}</h1>
      }
} 