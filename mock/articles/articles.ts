const articles = [
    {
        id: 1,
        label: "Análise de Algoritmos Genéticos",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["1"],
        keywords: ["algoritmos", "genéticos", "otimização"],
        categories:[ "Computação", "Matemática"],
        resume: "Este artigo explora o uso de algoritmos genéticos na otimização de funções complexas."
    },
    {
        id: 2,
        label: "Introdução à Inteligência Artificial",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["2"],
        keywords: ["inteligência artificial", "machine learning", "redes neurais"],
        categories: ["Computação"],
        resume: "Uma visão geral sobre os conceitos básicos e aplicações da inteligência artificial."
    },
    {
        id: 3,
        label: "Aprendizado de Máquina Aplicado à Medicina",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["13", "14"],
        keywords: ["machine learning", "medicina", "diagnóstico"],
        categories: ["Medicina"],
        resume: "O artigo discute como técnicas de machine learning podem ser usadas para melhorar diagnósticos médicos."
    },
    {
        id: 4,
        label: "Redes Neurais e sua Aplicação em Previsão de Mercado",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["15", "16"],
        keywords: ["redes neurais", "previsão de mercado", "finanças"],
        categories: ["Economia"],
        resume: "Explora o uso de redes neurais para previsões financeiras e de mercado."
    },
    {
        id: 5,
        label: "Processamento de Imagem com Deep Learning",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["7"],
        keywords: ["deep learning", "processamento de imagem", "visão computacional"],
        categories: ["Computação"],
        resume: "Discute técnicas de deep learning aplicadas ao processamento e reconhecimento de imagens."
    },
    {
        id: 6,
        label: "Sistemas Embarcados para Internet das Coisas",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["17"],
        keywords: ["sistemas embarcados", "internet das coisas", "IoT"],
        categories: ["Engenharia"],
        resume: "Uma análise dos sistemas embarcados que habilitam a Internet das Coisas (IoT)."
    },
    {
        id: 7,
        label: "Big Data e Análise de Dados em Tempo Real",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["14", "2"],
        keywords: ["big data", "análise de dados", "tempo real"],
        categories: ["Computação"],
        resume: "Este artigo trata das técnicas e ferramentas para análise de grandes volumes de dados em tempo real."
    },
    {
        id: 8,
        label: "Blockchain e Segurança da Informação",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["5"],
        keywords: ["blockchain", "segurança da informação", "criptografia"],
        categories: ["Segurança"],
        resume: "Investiga como a tecnologia blockchain pode ser usada para aumentar a segurança da informação."
    },
    {
        id: 9,
        label: "Computação Quântica: O Futuro da Computação",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["9", "10"],
        keywords: ["computação quântica", "algoritmos quânticos", "futuro da computação"],
        categories: ["Computação"],
        resume: "Uma introdução à computação quântica e seu potencial transformador na área de tecnologia."
    },
    {
        id: 10,
        label: "Algoritmos de Aprendizado Supervisionado",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["3", "5"],
        keywords: ["aprendizado supervisionado", "machine learning", "classificação"],
        categories:[ "Computação"],
        resume: "Uma análise detalhada dos principais algoritmos de aprendizado supervisionado e suas aplicações."
    },
    {
        id: 11,
        label: "Segurança em Redes de Computadores",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["8", "11"],
        keywords: ["segurança em redes", "firewall", "detecção de intrusão"],
        categories: ["Segurança"],
        resume: "Explora técnicas e ferramentas para assegurar a segurança em redes de computadores."
    },
    {
        id: 12,
        label: "Tecnologias Emergentes em Smart Cities",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["7"],
        keywords: ["smart cities", "tecnologias emergentes", "sustentabilidade"],
        categories: ["Urbanismo"],
        resume: "Discute as tecnologias emergentes que estão moldando o futuro das cidades inteligentes."
    },
    {
        id: 13,
        label: "Redes de Sensores Sem Fio",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["13", "14"],
        keywords: ["redes de sensores", "IoT", "comunicação sem fio"],
        categories: ["Engenharia"],
        resume: "Examina o uso de redes de sensores sem fio no contexto da Internet das Coisas (IoT)."
    },
    {
        id: 14,
        label: "Aplicações de IoT em Agricultura",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["4", "5", "9", "11"],
        keywords: ["IoT", "agricultura", "tecnologia agrícola"],
        categories: ["Agronomia"],
        resume: "Discute como a IoT pode ser aplicada para melhorar práticas agrícolas e aumentar a produtividade."
    },
    {
        id: 15,
        label: "Técnicas de Criptografia Avançada",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["10", "11"],
        keywords: ["criptografia", "segurança da informação", "protocolo seguro"],
        categories: ["Segurança"],
        resume: "Explora técnicas avançadas de criptografia para proteção de dados sensíveis."
    },
    {
        id: 16,
        label: "Visão Computacional em Robótica",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["17"],
        keywords: ["visão computacional", "robótica", "inteligência artificial"],
        categories: ["Robótica"],
        resume: "Investiga como técnicas de visão computacional são aplicadas no desenvolvimento de sistemas robóticos."
    },
    {
        id: 17,
        label: "Energia Sustentável e Tecnologias Verdes",
        link: "http://copec.eu/congresses/intertech2014/proc/works/101.pdf",
        authors: ["4"],
        keywords: ["energia sustentável", "tecnologias verdes", "meio ambiente"],
        categories: ["Meio Ambiente"],
        resume: "Discute a importância e as inovações em tecnologias verdes para a promoção de energia sustentável."
    }
];


export { articles }