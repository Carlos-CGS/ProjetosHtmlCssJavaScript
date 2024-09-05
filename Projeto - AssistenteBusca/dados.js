
const linguagens = [
    {
        titulo: "Python",
        descricao: "Linguagem interpretada, de alto nível e propósito geral, conhecida por sua sintaxe clara e legível.",
        curiosidade: " Foi nomeada em homenagem ao grupo de comédia Monty Python. Possui uma comunidade muito ativa e amigável, famosa por sua filosofia 'baterias inclusas'. ",
        exemplo: "print('Olá, mundo!')",
        link: "https://docs.python.org/3/",
        paradigma: "Multi-paradigma",
        criadoEm: 1991,
        imagem: "python.png",
    },
    {
        titulo: "C#",
        descricao: "Linguagem orientada a objetos, desenvolvida pela Microsoft.",
        curiosidade: " Originalmente chamado de 'C sharp', mas o símbolo musical '♯' não era compatível com todos os sistemas de arquivos. Foi projetado pela Microsoft para ser uma linguagem moderna e orientada a objetos. ",
        exemplo: "Console.WriteLine(\"Olá, mundo!\");",
        link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
        paradigma: "Orientada a objetos",
        criadoEm: 2000,
        imagem: "csharp.png",
    },
    {
        titulo: "HTML",
        descricao: "Linguagem de marcação utilizada para estruturar o conteúdo de páginas web.",
        curiosidade: " A sigla HTML significa 'HyperText Markup Language'. É a base de todas as páginas da Web. ",
        exemplo: "<!DOCTYPE html>\n<html>\n<body>\n\t<p>Olá, mundo!</p>\n</body>\n</html>",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
        paradigma: "Declarativa",
        criadoEm: 1993,
        imagem: "html.png"
    },
    {
        titulo: "CSS",
        descricao: "Linguagem de estilo utilizada para formatar a apresentação de páginas web.",
        curiosidade: " A sigla CSS significa 'Cascading Style Sheets'. É usado para definir a aparência visual de um documento HTML. ",
        exemplo: "body { font-size: 20px; }",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
        paradigma: "Declarativa",
        criadoEm: 1996,
        imagem: "css.png"
    },
    {
        titulo: "JavaScript",
        descricao: "Linguagem interpretada, cliente-side, utilizada para criar interatividade em páginas web.",
        curiosidade: " Originalmente chamado de 'LiveScript'. É a linguagem mais popular para desenvolvimento web front-end. ",
        exemplo: "console.log('Olá, mundo!');",
        link: "https://developer.mozilla.org/pt-BR/",
        paradigma: "Multi-paradigma",
        criadoEm: 1995,
        imagem: "javascript.png"
    },
    {
        titulo: "Java",
        descricao: "Linguagem orientada a objetos, robusta e de propósito geral, amplamente utilizada em aplicações empresariais.",
        curiosidade: " Foi nomeada em homenagem ao café. É conhecida por sua portabilidade, 'uma vez escrito, roda em qualquer lugar'. ",
        exemplo: "public class OlaMundo {\n    public static void main(String[] args) {\n        System.out.println(\"Olá, mundo!\");\n    }\n}",
        link: "https://docs.oracle.com/en/java/",
        paradigma: "Orientada a objetos",
        criadoEm: 1995,
        imagem: "java.png"
    },
    {
        titulo: "Kotlin",
        descricao: "Linguagem moderna para desenvolvimento Android, interoperável com Java.",
        curiosidade: " Foi nomeada em homenagem à ilha de Kotlin, na Rússia. É oficialmente suportada pelo Google para desenvolvimento Android. ",
        exemplo: "fun main() { println(\"Olá, mundo!\") }",
        link: "https://kotlinlang.org/",
        paradigma: "Multi-paradigma",
        criadoEm: 2011,
        imagem: "kotlin.png"
    },
    {
        titulo: "R",
        descricao: "Linguagem utilizada principalmente para análise estatística e ciência de dados.",
        curiosidade: " É amplamente utilizado para análise estatística e ciência de dados. Seu nome é uma referência à linguagem S. ",
        exemplo: "print('Olá, mundo!')",
        link: "https://www.r-project.org/",
        paradigma: "Funcional",
        criadoEm: 1993,
        imagem: "r.png"
    },
    {
        titulo: "C++",
        descricao: "Linguagem de programação de baixo nível e alto desempenho.",
        curiosidade: " Uma extensão da linguagem C, adicionando recursos de programação orientada a objetos. É amplamente utilizada em desenvolvimento de jogos e sistemas operacionais. ",
        exemplo: "#include <iostream> <br> int main() { <br> std::cout << \"Olá, mundo!\" << std::endl; <br> return 0; }",
        link: "https://isocpp.org/",
        paradigma: "Multi-paradigma",
        criadoEm: 1979,
        imagem: "c++.png"
    },
    {
        titulo: "Assembly",
        descricao: "Linguagem de baixo nível, dependente da arquitetura.",
        curiosidade: " É a linguagem de programação de mais baixo nível. Cada instrução em Assembly corresponde diretamente a uma única instrução de máquina. ",
        exemplo: "section .text\n global _start\n_start:\n mov eax, 4\n mov ebx, 1\n mov ecx, mensagem\n mov edx, 13\n int 0x80\n mov eax, 1\n mov ebx, 0\n int 0x80\n section .data\n mensagem db 'Olá, mundo!',0xa'",
        link: "https://en.wikipedia.org/wiki/Assembly_language",
        paradigma: "Imperativo",
        criadoEm: 1940,
        imagem: "assembly.png"
    },
    {
        titulo: "C",
        descricao: "Linguagem de programação procedural, utilizada em diversas áreas.",
        curiosidade: " É uma das linguagens de programação mais antigas e ainda amplamente utilizada. A base para muitas outras linguagens, como C++, Java e C#. ",
        exemplo: "#include <stdio.h>\nint main() {\n    printf(\"Olá, mundo!\");\n    return 0;\n}",
        link: "https://en.wikipedia.org/wiki/C_(programming_language)",
        paradigma: "Imperativo",
        criadoEm: 1972,
        imagem: "c.png"
    },
    {
        titulo: "PHP",
        descricao: "Linguagem de script principalmente utilizada para desenvolvimento web.",
        curiosidade: " Originalmente significava 'Personal Home Page'. É uma das linguagens mais populares para desenvolvimento web back-end. ",
        exemplo: "<?php echo 'Olá, mundo!'; ?>",
        link: "https://www.php.net/manual/pt_BR/",
        paradigma: "Multi-paradigma",
        criadoEm: 1994,
        imagem: "php.png"
    },
    {
        titulo: "Go",
        descricao: "Linguagem compilada, eficiente e de código aberto, desenvolvida pelo Google.",
        curiosidade: " Go foi criado pelo Google como uma linguagem de programação para sistemas, com foco em eficiência, confiabilidade e simplicidade. ",
        exemplo: "package main\nimport \"fmt\"\nfunc main() { fmt.Println(\"Olá, mundo!\") }",
        link: "https://go.dev/",
        paradigma: "Imperativo",
        criadoEm: 2009,
        imagem: "go.png"
    },
    {
        titulo: "Swift",
        descricao: "Linguagem de programação desenvolvida pela Apple para iOS, macOS, watchOS e tvOS.",
        curiosidade: " Swift foi desenvolvida pela Apple como uma alternativa mais moderna e segura ao Objective-C para o desenvolvimento de aplicativos iOS e macOS. ",
        exemplo: "print(\"Olá, mundo!\")",
        link: "https://developer.apple.com/swift/",
        paradigma: "Multi-paradigma",
        criadoEm: 2014,
        imagem: "swift.png"
    },
    {
        titulo: "TypeScript",
        descricao: "Superconjunto tipado do JavaScript.",
        curiosidade: " É um superconjunto de JavaScript que adiciona tipagem estática. Desenvolvido pela Microsoft. ",
        exemplo: "let mensagem: string = 'Olá, mundo!';\nconsole.log(mensagem);",
        link: "https://www.typescriptlang.org/",
        paradigma: "Orientada a objetos",
        criadoEm: 2012,
        imagem: "typescript.png"
    },
    {
        titulo: "Ruby",
        descricao: "Linguagem interpretada, de alto nível e propósito geral, conhecida por sua sintaxe elegante.",
        curiosidade: " É conhecida por sua sintaxe elegante e expressiva. Foi fortemente influenciada por Perl e Smalltalk. ",
        exemplo: "puts 'Olá, mundo!'",
        link: "https://www.ruby-lang.org/en/",
        paradigma: "Multi-paradigma",
        criadoEm: 1995,
        imagem: "ruby.png"
    },
    {
        titulo: "Scala",
        descricao: "Linguagem escalável e funcional, rodando na JVM.",
        curiosidade: " É um portmanteau de 'scalable' e 'language'. Combina programação funcional e orientada a objetos. ",
        exemplo: "println(\"Olá, mundo!\")",
        link: "https://scala-lang.org/",
        paradigma: "Funcional",
        criadoEm: 2003,
        imagem: "scala.png"
    },
    {
        titulo: "Dart",
        descricao: "Linguagem desenvolvida pelo Google para criar aplicativos móveis, web e servidores.",
        curiosidade: " Desenvolvido pelo Google para criar aplicações web e móveis de alta performance. É a linguagem principal para o desenvolvimento de aplicativos Flutter. ",
        exemplo: "void main() { print('Olá, mundo!'); }",
        link: "https://dart.dev/",
        paradigma: "Orientada a objetos",
        criadoEm: 2011,
        imagem: "dart.png"
    },
    {
        titulo: "Rust",
        descricao: "Linguagem focada em segurança e desempenho.",
        curiosidade: " Focada em segurança de memória, concorrência e performance. Ganhou popularidade por sua capacidade de criar software confiável e eficiente. ",
        exemplo: "fn main() { println!('Olá, mundo!'); }",
        link: "https://www.rust-lang.org/",
        paradigma: "Multi-paradigma",
        criadoEm: 2010,
        imagem: "rust.png"
    },
    {
        titulo: "Perl",
        descricao: "Linguagem de scripting versátil, conhecida por suas expressões regulares poderosas.",
        curiosidade: " Originalmente criado para manipulação de texto. Conhecido por suas expressões regulares poderosas. ",
        exemplo: "print 'Olá, mundo!\n';",
        link: "https://www.perl.org/",
        paradigma: "Multi-paradigma",
        criadoEm: 1987,
        imagem: "perl.png"
    }
];