import React from 'react';


export class Home extends React.Component {

    // for trying to reduce spams, we don't write the email directly
    // and we use this function
    // I am too lazy to use a contact form
    customRedirect(){
        let name = 'gaetan';
        let mailBody = '@shinsen.fr';
        let email = name + mailBody;
        window.location.href = "mailto:"+email;
    }

    componentDidMount(){
        console.log('Welcome to shinsen.fr :-)');
    }

    render () {
        return (
            <div className="App">

                <div className="container">

                    <header className="home-header">
                        <h1>Shinsen, développement web</h1>
                    </header>

                    <section>
                        <p>La micro-entreprise Shinsen vous aide à développer vos projets web en vous proposant des prestations de développement principalement autour des technologies Symfony et React.</p>

                        <p>Pour nous contacter, écrivez à <span id='myEmail' onClick={this.customRedirect}>gaetan(at)shinsen(pt)fr</span>. N'hésitez pas à nous poser des questions ou nous faire part de vos besoins, nous serons ravi.e.s de répondre à vos messages.</p>
                    </section>

                    <section>
                        <h2>Derrière Shinsen</h2>

                        <p>Je m'appelle <a target='_blank' href="https://www.linkedin.com/in/ga%C3%A9tan-darqui%C3%A9-502160a7/">Gaétan Darquié</a>, je suis développeur Symfony orienté React. Vous pouvez me retrouver sur github <a
                            href="https://github.com/gdarquie" target='_blank'>ici</a>.</p>

                        <p>J’ai travaillé à l'université pendant 7 ans en développant ou dirigeant des projets en humanités numériques et je suis docteur en <a href="https://fr.wikipedia.org/wiki/Sciences_de_l%27information_et_de_la_communication" target='_blank'>SIC</a>.</p>

                        <p>En 2017, j'ai rejoint le secteur privé, j'ai d'abord occupé la place de développeur Symfony chez <a
                            href="https://www.ensembl.fr/" target='_blank'>Ensembl'</a> puis de développeur data chez <a
                            href="https://www.socloz.com/" target='_blank'>SoCloz</a> et enfin de CTO à <a href="https://lafourche.fr/" target='_blank'>La Fourche</a>.</p>

                        <p>Aujourd'hui j'ai décidé de me lancer ma propre structure et de commencer une nouvelle aventure avec Shinsen.</p>

                        <p>Je suis basé sur Paris et mon bureau est à <a href="https://la-ruche.net/ruche/paris/" target='_blank'>La Ruche</a>.</p>
                    </section>

                    <section>
                        <h2>Services proposés</h2>

                        <p>Shinsen vous propose des missions en tant que freelance pour du développement web, ma qualification principale concerne PHP et Symfony, je travaille avec Symfony depuis 2015 et je monte actuellement en compétence sur React.</p>

                        <p>Je suis capable de vous apporter des bases devOps (Cloud, Git, CI, déploiement) et suis ouvert à des missions qui me permettraient de découvrir d'autres framework ou langages.</p>

                        <p>Je serai également présent pour vous aider dans la conception de votre projet numérique, vous aider à rédiger des appels à projets, à mettre en place ou améliorer vos processus SCRUM et décrire en tickets ou cahier(s) des charges des taches techniques complexes si vous le désirez.</p>

                    </section>

                    <section>

                        <h2>Nos valeurs</h2>
                        <ul>
                            <li>Nous prilivégions les projets éthiques et le code open source.</li>
                            <li>Nous aimons les design patterns et cherchons à être fier.e.s du code que nous livrons.</li>
                            <li>Nous nous intéressons à l'évolution du code et des langages.</li>
                        </ul>
                    </section>

                    <section>
                        <h3>écrire du code, écrire en code, écrire le code</h3>
                    </section>

                </div>

            </div>
        );
    }
}
