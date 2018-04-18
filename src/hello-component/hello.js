import './hello.css';
import html from './hello.html';

export function sayHello(name){
    return html.replace(/[\s\r\n]*<[^>]+>[\s\r\n]*/g, '').replace('world', name) + '!';
}
