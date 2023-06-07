import { React, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'


function AGB() {

    const topContainer = useRef();

    useEffect(() => {
        topContainer.current.scrollIntoView({ block: "start", behavior: 'smooth' });
    }, []);
    const { t, i18n } = useTranslation()


    return (
        <>
            {i18n.language === 'de' &&
                <div ref={topContainer}>
                    <h1 className='text-2xl md:text-3xl text-center font-semibold my-10 mx-4'>Allgemeine Geschäftsbedingungen der Besi Storen GmbH</h1>
                    <hr className='w-3/4 m-auto my-10' />
                    <div className='mx-10 md:mx-60'>
                        <p>Herzlich willkommen bei Besi Storen! Diese Allgemeinen Geschäftsbedingungen enthalten die Regeln und Bestimmungen für die Nutzung von Besi Storen Gmbh's Website unter www.besi-storen.ch. Wir gehen davon aus, dass Sie bei Zugriff auf die Website die Allgemeinen Geschäftsbedingungen in vollem Umfang akzeptieren. Bitte fahren Sie mit der Nutzung von Besi Storen nicht fort, sofern Sie nicht mit allen auf dieser Seite aufgeführten Bedingungen einverstanden sind.</p>
                        <h3 className='text-xl font-bold my-5'>Cookies:</h3>
                        <p>Die Website verwendet Cookies, um Ihr Online-Erlebnis zu personalisieren. Durch weiteren Zugriff auf Besi Storen stimmen Sie der Verwendung von Cookies zu. Ein Cookie ist eine Textdatei, die von einem Webserver auf Ihrer Festplatte gespeichert wird. Cookies können keine Programme ausführen oder Viren auf Ihren Computer übertragen. Sie enthalten einen eindeutigen Identifikator und können nur von dem Webserver der Domain gelesen werden, die das Cookie bei Ihnen gespeichert hat. Wir verwenden Cookies zu unterschiedlichen Zwecken, unter anderem zur Analyse und für personalisierte Marketing-Mitteilungen mit dem Ziel, die Benutzerfreundlichkeit unserer Website zu verbessern. Sie haben die Möglichkeit, optionale Cookies abzulehnen. Einige Cookies sind jedoch für das einwandfreie und ordnungsgemäße Funktionieren unserer Website unbedingt notwendig. Solche technisch notwendigen Cookies müssen immer aktiviert werden und erfordern daher keiner Einwilligung. Beachten Sie bitte, dass Sie durch das Akzeptieren der erforderlichen Cookies auch Cookies von Drittanbietern akzeptieren, sofern Sie von Drittanbietern auf unserer Website bereitgestellte Dienste wie z. B. ein integriertes Videoanzeigefenster nutzen.</p>
                        <h3 className='text-xl font-bold my-5'>Lizenz:</h3>
                        <p>Sofern nicht anderweitig angegeben haben Besi Storen Gmbh und/oder seine Lizenzgeber die geistigen Eigentumsrechte für alle Materialien auf Besi Storen. Alle Rechte am geistigen Eigentum sind vorbehalten. Sie können Seiten von Besi Storen für Ihren eigenen persönlichen Gebrauch ansehen und/oder ausdrucken, vorbehaltlich der in diesen Allgemeinen Geschäftsbedingungen festgelegten Einschränkungen.<br /> Folgendes ist untersagt:</p>
                        <ul className='mt-4 mx-6 list-disc'>
                            <li>Veröffentlichung des Materials von Besi Storen</li>
                            <li>Verkauf, Vermietung oder Unterlizenzierung des Materials von Besi Storen</li>
                            <li>Reproduktion, Vervielfältigung oder Kopie des Materials von Besi Storen</li>
                            <li>Weiterverbreitung der Inhalte von Besi Storen</li>
                        </ul>
                        <p className='my-4'>Diese Vereinbarung tritt mit dem heutigen Datum in Kraft.</p>
                        <p>In gewissen Bereichen dieser Website haben Nutzer die Möglichkeit, Kommentare zu Zwecken des Meinungs- und Informationsaustausches zu hinterlassen. Entsprechende Nutzerkommentare werden vor ihrer Veröffentlichung auf der Website von Besi Storen Gmbh nicht überprüft, gefiltert, bearbeitet oder verbreitet. Nutzerkommentare spiegeln ausschließlich die persönliche Meinung des jeweiligen Verfassers wider und entsprechen nicht den Ansichten und Überzeugungen von Besi Storen Gmbh, den rechtlichen Vertretern und/oder Vertriebspartnern. Sofern rechtlich nicht anders geregelt, übernimmt Besi Storen Gmbh keinerlei Haftung für Nutzerkommentare oder sich eventuell infolge der Erscheinung entsprechender Nutzerkommentare auf der Website ergebende Schadensansprüche und/oder Kosten.<br /><br />Besi Storen Gmbh behält sich das Recht vor, alle Kommentare zu überprüfen und eventuell zu entfernen, wenn jene als unangemessen, anstößig oder als Verstoß gegen die Allgemeinen Geschäftsbedingungen betrachtet werden können.<br /><br />Hiermit versichern Sie uns und stimmen zu, dass:</p>
                        <ul className='my-4 mx-6 list-disc'>
                            <li>Sie über die notwendige Berechtigung, eventuell erforderliche Lizenzen und Einwilligungen verfügen, Kommentare auf unserer Website zu veröffentlichen;</li>
                            <li>Ihre Kommentare keine Rechte an geistigem Eigentum oder anderweitige Eigentumsrechte wie Urheberrechte, Patente oder Markenrechte Dritter verletzen;</li>
                            <li>Ihre Kommentare kein beleidigendes, verleumderisches, anstößiges, unangemessenes oder anderweitig rechtswidriges Material enthalten, welches eine Verletzung der Privatsphäre darstellt;</li>
                            <li>Ihre Kommentare nicht dem Zweck dienen, geschäftliche, kundenorientierte, kommerzielle Aktivitäten oder rechtswidrige Handlungen zu bewerben oder zu fördern;</li>
                        </ul>
                        <p>Sie gewähren Besi Storen Gmbh hiermit eine nicht-exklusive Lizenz zur Nutzung, Reproduktion, Bearbeitung und Autorisierung anderer zur Nutzung, Reproduktion und Bearbeitung Ihrer Kommentare in allen Formen, Formaten oder Medien.</p>
                        <h3 className='text-xl font-bold my-5'>Verlinken unserer Inhalte:</h3>
                        <p>Folgende Institutionen dürfen ohne vorherige schriftliche Zustimmung einen Link auf unsere Website erstellen:</p>
                        <ul className='my-4 mx-6 list-disc'>
                            <li>Regierungsbehörden</li>
                            <li>Suchmaschinen</li>
                            <li>Nachrichtenagenturen</li>
                            <li>Online-Verzeichnisse dürfen in ihrer Auflistung einen den anderen dort gelisteten Unternehmen entsprechenden Link zu unserer Website erstellen</li>
                            <li>Akkreditierte Unternehmen. Ausgenommen sind werbende gemeinnützige Organisationen, Shops von Wohltätigkeitsorganisationen und Spendenorganisationen, die Geld für wohltätige Zwecke sammeln. Diese dürfen nicht auf unsere Website verlinken.</li>
                        </ul>
                        <p>Diese Organisationen dürfen eine Verlinkung zu unserer Startseite, unseren Publikationen oder anderen Informationen der Website erstellen, sofern die Verlinkung: (a) in keiner Weise irreführend ist; (b) nicht irrtümlicherweise Förderung, Unterstützung oder Zustimmung in Bezug auf die verlinkenden Partei oder ihre Produkte und/oder Dienstleistungen andeutet; und (c) in den Kontext der zu verlinkenden Website passt.</p>
                        <p className='my-5'>Linkanfragen folgender Arten von Organisation können in Betracht gezogen und genehmigt werden:</p>
                        <ul className='my-4 mx-6 list-disc'>
                            <li>allgemein bekannte Verbraucher- und/oder Geschäftsinformationsquellen;
                            </li>
                            <li>dot.com Community-Websites;</li>
                            <li>Verbände oder andere Einrichtungen, die Wohltätigkeitsorganisationen vertreten;</li>
                            <li>Online-Verzeichnisse;</li>
                            <li>Internetportale;</li>
                            <li>Wirtschaftsprüfungs-, Rechts- und Beratungsunternehmen;</li>
                            <li>Bildungsinstitute und Handelsverbände;</li>
                        </ul>
                        <p>Wir werden Linkanfragen von solchen Organisationen genehmigen, sofern: (a) der Link keine negativen Auswirkungen für uns oder unsere akkreditierten Unternehmen hat; (b) es in der Vergangenheit zu keinem Zeitpunkt zu Unstimmigkeiten mit der Organisation kam; (c) die Vorteile der Sichtbarkeit des Links trotz fehlender Nennung von Besi Storen Gmbh überwiegen und (d) der Link im Kontext allgemeiner Ressourceninformationen steht.<br /><br />Diese Organisationen dürfen eine Verlinkung zu unserer Startseite erstellen, sofern die Verlinkung: (a) in keiner Weise irreführend ist; (b) nicht irrtümlicherweise Förderung, Unterstützung oder Zustimmung in Bezug auf die verlinkenden Partei oder ihre Produkte und/oder Dienstleistungen andeutet; und (c) in den Kontext der zu verlinkenden Website passt.<br /><br />Wenn Sie zu den in Punkt 2 gelisteten Organisationen gehören und an einer Verlinkung mit unserer Website interessiert sind, senden Sie uns bitte eine E-Mail an Besi Storen Gmbh unter Angabe Ihres Namens, des Namens Ihrer Organisation, Ihrer Kontaktdaten, Ihrer Website-URL, der Liste aller URLs, von denen Sie auf unsere Website verlinken möchten sowie der Liste aller URLs auf unserer Website auf die Sie verlinken möchten. Wir werden uns bemühen, Ihnen innerhalb von 2 bis 3 Wochen zu antworten.</p>
                        <p className='my-5'>Organisationen, die eine Genehmigung erhalten, dürfen unsere Website wie folgt verlinken:</p>
                        <ul className='my-4 mx-6 list-disc'>
                            <li>Unter Verwendung unseres Unternehmensnamens oder</li>
                            <li>Unter Verwendung des Uniform Resource Locator (URL), mit dem verknüpft wird oder</li>
                            <li>Unter Verwendung anderer Beschreibungen unserer Website oder der Materialien, auf die verlinkt wird auf eine Art, dass die Beschreibungen dem Kontext und Inhalt auf der verlinkten Website entsprechen.</li>
                        </ul>
                        <p className='my-5'>Ohne Lizenzvereinbarung zur Markennutzung dürfen weder das Logo von Besi Storen Gmbh noch andere Grafikelemente zur Verlinkung verwendet werden.</p>
                        <h3 className='text-xl font-bold my-5'>Haftung für Inhalte:</h3>
                        <p className='my-5'>Wir übernehmen keine Haftung für Inhalte, die auf Ihrer Website erscheinen. Sie erklären sich hiermit einverstanden, uns hinsichtlich aller auf Ihrer Website erhobenen Ansprüche schadlos zu halten. Auf keiner Website dürfen Links erscheinen, deren Inhalte als verleumderisch, obszön oder kriminell gewertet werden können oder gegen Rechte verstoßen, sie verletzen oder sonstige Verstöße und Verletzung von Rechten Dritter befürworten.</p>
                        <h3 className='text-xl font-bold my-5'>Rechtsvorbehalt:</h3>
                        <p className='my-5'>Wir behalten uns das Recht vor, jederzeit und nach eigenem Ermessen zu verlangen, dass Sie alle Links oder einen bestimmten Link zu unserer Website entfernen. Sie erklären sich damit einverstanden, einer solchen Aufforderung umgehend nachzukommen und alle Links zu unserer Website unverzüglich zu entfernen. Wir behalten uns außerdem das Recht vor, die Allgemeinen Geschäftsbedingungen und die Verlinkungsrichtlinien jederzeit ändern zu können. Wenn Sie weiterhin auf unsere Website verlinken, stimmen Sie den Verlinkungsrichtlinien in diesen Allgemeinen Geschäftsbedingungen zu. Indem Sie weiterhin auf unsere Website verlinken, erklären Sie sich damit einverstanden, an diese Verlinkungsbedingungen gebunden zu sein und sie einzuhalten.</p>
                        <h3 className='text-xl font-bold my-5'>Entfernung von Links von unserer Website:</h3>
                        <p className='my-5'>Bitte kontaktieren Sie uns jederzeit, wenn Sie einen Link auf unserer Website oder eine verlinkte Website aus irgendeinem Grund als unangemessen betrachten. Anfragen zur Link-Entfernung werden von uns geprüft, wir sind jedoch nicht verpflichtet, ihnen nachzukommen oder auf Anfragen direkt zu antworten.<br /><br /> Wir übernehmen keine Garantie weder für die Vollständigkeit oder Richtigkeit der Informationen auf dieser Website, noch dass die Website verfügbar bleibt und das Material auf der Website auf dem neuesten Stand gehalten wird.</p>
                        <h3 className='text-xl font-bold my-5'>Haftungsausschluss:</h3>
                        <p className='my-5'>Soweit dies nach geltendem Recht zulässig ist, schließen wir alle Zusicherungen, Gewährleistungen und Bedingungen im Zusammenhang mit unserer Website und der Nutzung dieser Website aus. Nichts in diesem Haftungsausschluss soll:</p>
                        <ul className='my-4 mx-6 list-disc'>
                            <li>unsere oder Ihre Haftung für Tod oder Körperverletzung infolge von Fahrlässigkeit einschränken oder ausschließen;</li>
                            <li>unsere oder Ihre Haftung für Betrug oder betrügerische Falschdarstellung einschränken oder ausschließen;</li>
                            <li>unsere oder Ihre Haftung in einer Weise beschränken, die nach geltendem Recht nicht zulässig ist oder</li>
                            <li>irgendeine unserer oder Ihrer Haftungen ausschließen, die nach geltendem Recht nicht ausgeschlossen werden können.</li>
                        </ul>
                        <p className='mb-10'>Die in diesem Abschnitt und an anderer Stelle in diesem Haftungsausschluss dargelegten Haftungsbeschränkungen und -ausschlüsse: (a) unterliegen dem vorhergehenden Absatz und (b) gelten für alle Haftungen, die sich aus dem Haftungsausschluss oder in Bezug auf den Gegenstand dieses Haftungsausschlusses ergeben, einschließlich Haftungen aus Vertrag, unerlaubter Handlung und aufgrund der Verletzung gesetzlicher Pflichten.<br /> <br /> Solange die Website und die Informationen und Dienstleistungen auf dieser Website kostenlos zur Verfügung gestellt werden, übernehmen wir keine Haftung für Verluste oder Schäden jeglicher Art.</p>
                    </div>
                </div>
            }
            {i18n.language !== 'de' &&
                <div>
                     <h1 className='text-2xl md:text-3xl text-center font-semibold my-10 mx-4'>{t('DATA.HEADER')}</h1>
                    <hr className='w-3/4 m-auto my-10' />
                    <div className='mx-10 md:mx-60'>
                    <p>{t('DATA.DESCRIPTION')}</p>
                    <div>
                        <h3 className='text-xl font-bold my-5'>{t('DATA.PERSONALDATA')}</h3>
                        <p>{t('DATA.PERSONALDATA_DESCRIPTION')}</p>
                    </div>
                    <div>
                        <h3 className='text-xl font-bold my-5'>{t('DATA.COOKIES')}</h3>
                        <p>{t('DATA.COOKIES_DESCRIPTION')}</p>
                    </div>
                    <div className='mb-40'>
                        <h3 className='text-xl font-bold my-5'>{t('DATA.OWNER')}</h3>
                        <p>B. Huruglica, Owner</p>
                    </div>
                    </div>
                    
                </div>}
        </>
    )
}

export default AGB
