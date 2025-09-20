export default function Studies() {
    return (
        <section className="Studies section flex column align-space justify-space" id="Studies">
            <h2 className="text-gradient">My Studies</h2>
            <ul className="studies-list row flex align-space justify-space row wrap">
                <li className="flex row wrap align-space justify-space">
                    <img src="studies/industrial.png" />
                    <div className="flex column wrap justify-center">
                        <div className="titles">Industrial Engineer</div>
                        <div className="university">Universidad Tecnológica de Bolívar</div>
                        <div className="degree">Engineering, 2020</div>
                    </div>
                </li>
                <li className="flex row wrap align-space justify-space">
                    <img src="studies/developer.png" />
                    <div className="flex column wrap justify-center">
                        <div className="titles">Developer</div>
                        <div className="university">Academlo Bootcamp</div>
                        <div className="degree">Programming, 2022</div>
                    </div>
                </li>
                <li className="flex row wrap align-space justify-space">
                    <img src="studies/translator.png" />
                    <div className="flex column wrap justify-center">
                        <div className="titles">Translator</div>
                        <div className="university">Centro Colombo Americano de Cartagena</div>
                        <div className="degree">Translation and Interpretation, 2020</div>
                    </div>
                </li>
            </ul>
        </section>
    );
}