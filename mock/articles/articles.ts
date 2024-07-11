const articles = [
    {
        label: "Análise de Algoritmos Genéticos",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "João Silva",
        keywords: ["algoritmos", "genéticos", "otimização"],
        categoria:[ "Computação", "Matemática"],
        resume: "Este artigo explora o uso de algoritmos genéticos na otimização de funções complexas."
    },
    {
        label: "Introdução à Inteligência Artificial",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "Maria Oliveira",
        keywords: ["inteligência artificial", "machine learning", "redes neurais"],
        categoria: ["Computação"],
        resume: "Uma visão geral sobre os conceitos básicos e aplicações da inteligência artificial."
    },
    {
        label: "Aprendizado de Máquina Aplicado à Medicina",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "Carlos Souza",
        keywords: ["machine learning", "medicina", "diagnóstico"],
        categoria: ["Medicina"],
        resume: "O artigo discute como técnicas de machine learning podem ser usadas para melhorar diagnósticos médicos."
    },
    {
        label: "Redes Neurais e sua Aplicação em Previsão de Mercado",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "Ana Pereira",
        keywords: ["redes neurais", "previsão de mercado", "finanças"],
        categoria: ["Economia"],
        resume: "Explora o uso de redes neurais para previsões financeiras e de mercado."
    },
    {
        label: "Processamento de Imagem com Deep Learning",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "Pedro Almeida",
        keywords: ["deep learning", "processamento de imagem", "visão computacional"],
        categoria: ["Computação"],
        resume: "Discute técnicas de deep learning aplicadas ao processamento e reconhecimento de imagens."
    },
    {
        label: "Sistemas Embarcados para Internet das Coisas",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "Lucas Costa",
        keywords: ["sistemas embarcados", "internet das coisas", "IoT"],
        categoria: ["Engenharia"],
        resume: "Uma análise dos sistemas embarcados que habilitam a Internet das Coisas (IoT)."
    },
    {
        label: "Big Data e Análise de Dados em Tempo Real",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "Fernanda Lima",
        keywords: ["big data", "análise de dados", "tempo real"],
        categoria: ["Computação"],
        resume: "Este artigo trata das técnicas e ferramentas para análise de grandes volumes de dados em tempo real."
    },
    {
        label: "Blockchain e Segurança da Informação",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "Ricardo Alves",
        keywords: ["blockchain", "segurança da informação", "criptografia"],
        categoria: ["Segurança"],
        resume: "Investiga como a tecnologia blockchain pode ser usada para aumentar a segurança da informação."
    },
    {
        label: "Computação Quântica: O Futuro da Computação",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "Juliana Santos",
        keywords: ["computação quântica", "algoritmos quânticos", "futuro da computação"],
        categoria: ["Computação"],
        resume: "Uma introdução à computação quântica e seu potencial transformador na área de tecnologia."
    },
    {
        label: "Algoritmos de Aprendizado Supervisionado",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "Marcos Dias",
        keywords: ["aprendizado supervisionado", "machine learning", "classificação"],
        categoria:[ "Computação"],
        resume: "Uma análise detalhada dos principais algoritmos de aprendizado supervisionado e suas aplicações."
    },
    {
        label: "Segurança em Redes de Computadores",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "Paula Carvalho",
        keywords: ["segurança em redes", "firewall", "detecção de intrusão"],
        categoria: ["Segurança"],
        resume: "Explora técnicas e ferramentas para assegurar a segurança em redes de computadores."
    },
    {
        label: "Tecnologias Emergentes em Smart Cities",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "Roberto Nunes",
        keywords: ["smart cities", "tecnologias emergentes", "sustentabilidade"],
        categoria: ["Urbanismo"],
        resume: "Discute as tecnologias emergentes que estão moldando o futuro das cidades inteligentes."
    },
    {
        label: "Redes de Sensores Sem Fio",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "Rafael Mendes",
        keywords: ["redes de sensores", "IoT", "comunicação sem fio"],
        categoria: ["Engenharia"],
        resume: "Examina o uso de redes de sensores sem fio no contexto da Internet das Coisas (IoT)."
    },
    {
        label: "Aplicações de IoT em Agricultura",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "Gabriela Souza",
        keywords: ["IoT", "agricultura", "tecnologia agrícola"],
        categoria: ["Agronomia"],
        resume: "Discute como a IoT pode ser aplicada para melhorar práticas agrícolas e aumentar a produtividade."
    },
    {
        label: "Técnicas de Criptografia Avançada",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "Thiago Martins",
        keywords: ["criptografia", "segurança da informação", "protocolo seguro"],
        categoria: ["Segurança"],
        resume: "Explora técnicas avançadas de criptografia para proteção de dados sensíveis."
    },
    {
        label: "Visão Computacional em Robótica",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "Camila Ribeiro",
        keywords: ["visão computacional", "robótica", "inteligência artificial"],
        categoria: ["Robótica"],
        resume: "Investiga como técnicas de visão computacional são aplicadas no desenvolvimento de sistemas robóticos."
    },
    {
        label: "Energia Sustentável e Tecnologias Verdes",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        author: "Bruno Fernandes",
        keywords: ["energia sustentável", "tecnologias verdes", "meio ambiente"],
        categoria: ["Meio Ambiente"],
        resume: "Discute a importância e as inovações em tecnologias verdes para a promoção de energia sustentável."
    }
];


export { articles }