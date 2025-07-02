# Letalidad extendida: una mirada regional a los fallecimientos hospitalarios en Chile

El sistema hospitalario en Chile, especialmente en sus unidades críticas, puede evidenciar ciertas deficiencias a nivel nacional y más considerando una comparación entre las diferentes regiones. Estos datos son una parte clave de la capacidad de respuesta sanitaria en el país. Esta visualización muestra la letalidad hospitalaria por región, considerando esto como datos que agrupan egresos, fallecidos y traslados en áreas clínicas.

El proceso de visualización se realizó considerando los porcentajes de letalidad de nuestra base de datos, por región en Chile. El gráfico muestra qué regiones presentan mayores tasas de letalidad y las que menos. Sin embargo, es fundamental entender qué significa exactamente ese porcentaje. La base de datos utilizada para construir esta visualización trabaja a nivel de ** las áreas clínicas hospitalarias**, no de hospitales completos. Por lo tanto, la variable que usamos es una **letalidad extendida**, calculada como:

**Letalidad extendida = FALLECIDOS / (EGRESOS + TRASLADOS)**

Esto quiere decir que no solo se consideran los pacientes fallecidos y los que salieron efectivamente del hospital (egresos), sino también aquellos que fueron **trasladados entre áreas** dentro del mismo establecimiento. 

Esto, se realizó a través de una visualización coon un gráfico de barras simple que muestra los porcentajes de más altos con un color más oscuros, a más bajos, segmentándolo por región. Esto permito evidenciar fácilmente las cifras. 

El objetivo a través de esta base de datos y esta visualización es reflejar el porcentaje de letalidad de cada región. Este enfoque nos permite ver, por ejemplo, que hay regiones donde la letalidad y el flujo de pacientes es mucho mayor.

Los datos por área clínica nos permiten identificar patrones, contrastes y posibles alertas. Sobretodo, al consiiderar las diferencias entre las regiones, vemos que la centralizaciión en Chile, además de un desarrollo focalizado en mayor medida, en solo las regiones más pobladas, afecta estos númos. 

Preguntas: 
¿Cuál es la región que tiene un mayor porcentaje de letalidad en Chile?
¿Cuál es el menor porcentaje de letalidad? ¿A qué región pertenece?
¿Cuánta es la diferencia entre la región con mayor letalidad y la que menos?

Ficha técnica de la base de datos:
Los datos son cuantitativos
Variables incorporadas: Letalidad | porcentaje de la letalidad extendida según área
Región | cada región en Chile

![Visualización][def]


[def]: grafico.jpg