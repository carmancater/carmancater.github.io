---
layout: page
title: Technical Documentation HTML
subtitle: Responsive web design freeCodeCamp project
share-title: Carman Cater - Technical Documentation HTML
share-description: Technical Documentation HTML
---

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Technical Documentation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="technicaldocumentation.css">
    </head>

    <body>
        <nav id="navbar">
            <header>Python Docs</header>
            <ul>
                <li><a href="#Introduction" class="nav-link">Introduction</a></li>
                <li><a href="#Variables" class="nav-link">Variables</a></li>
                <li><a href="#Conditional_Statement" class="nav-link">Conditional Statement</a></li>
                <li><a href="#Functions" class="nav-link">Functions</a></li>
                <li><a href="#Classes" class="nav-link">Classes</a></li>
                <li><a href="#Reference" class="nav-link">Reference</a></li>
            </ul>
        </nav>
        <main id="main-doc">
            <section class="main-section" id="Introduction">
                <header>
                    Introduction
                </header>

                <p>
                    Pellentesque ut dolor tincidunt, ultrices turpis pretium, tempor felis. Morbi a orci quis orci semper posuere id non lacus.
                </p>

                <p>
                    Etiam pretium, ante vel pharetra consectetur, libero neque fringilla nulla, nec finibus nunc felis at augue.
                </p>

            </section>

            <section class="main-section" id="Variables">
                <header>
                    Variables
                </header>

                <p>
                    Nunc a ipsum nec ante viverra aliquet a vitae massa. Aliquam erat volutpat. Maecenas pulvinar vel ligula sit amet tristique.
                </p>

                <p>
                    Nulla dolor neque, elementum at ex vel, viverra sodales nisi. Integer ultricies, leo in pulvinar pretium, justo justo tincidunt lacus, in fermentum velit est a urna.
                </p>

                <code>
                    Auto = pd.read_csv('Auto.csv', na_values=['?'])
                </code>
                
                <p>
                    Nulla dolor neque, elementum at ex vel, viverra sodales nisi. Integer ultricies, leo in pulvinar pretium, justo justo tincidunt lacus, in fermentum velit est a urna.
                </p>

                <code>
                    Auto = Auto.dropna().reset_index().drop(columns='index')
                </code>

                <ul>
                    <li>Hello</li>
                    <li>Here</li>
                    <li>Hi</li>
                    <li>Hope</li>
                    <li>Hunger</li>
                </ul>

            </section>

            <section class="main-section" id="Conditional_Statement">
                <header>
                    Conditional Statement
                </header>
                
                <p>
                    Curabitur vel finibus urna, eget dictum quam. Proin porttitor commodo est. In semper a massa efficitur eleifend.
                </p>

                <p>
                    Nullam finibus odio a hendrerit mollis. Morbi varius, ante nec molestie cursus, est nisi aliquam lectus, id porta tellus leo quis ligula.
                </p>

                <code>
                    design = MS(['horsepower'])
                </code>
                
            </section>

            <section class="main-section" id="Functions">
                <header>
                    Functions
                </header>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan maximus ipsum, eget efficitur enim aliquet at. 
                    Vivamus tristique luctus condimentum.
                </p>

                <p>
                    Nam consequat dolor ac lorem bibendum malesuada. Mauris feugiat sem ornare, egestas justo a, ultricies velit. 
                    Nullam nec nulla consequat, congue ex non, viverra sem. Vivamus scelerisque, augue non tempor ornare, augue leo sollicitudin arcu, sed viverra turpis arcu nec ante.
                </p>

                <code>
                    X = design.fit_transform(Auto)
                </code>
                
            </section>

            <section class="main-section" id="Classes">
                <header>
                    Classes
                </header>
                
                <p>
                    Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>

                <p>
                    Maecenas posuere tellus quis risus mollis condimentum. Phasellus at pulvinar odio. Vestibulum sapien nulla, consequat pharetra ante nec, dapibus laoreet ligula.
                </p>

                <code>
                    y = Auto['mpg']
                </code>
                
            </section>

            <section class="main-section" id="Reference">
                <header>
                    Reference
                </header>
            </section>
        </main>
    </body>
</html>
```