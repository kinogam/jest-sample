import './hello.css';
import * as html from './hello.html';

export function sayHello(name: string): string {
    return html.replace(/[\s\r\n]*<[^>]+>[\s\r\n]*/g, '').replace('world', name) + '!';
}
