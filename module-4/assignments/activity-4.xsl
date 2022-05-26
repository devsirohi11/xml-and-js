<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>
  <body>
  <h2> Table 1</h2>

<ul>
<xsl:for-each select="/products/product">
<xls:if  test= "@shippable = 'true' ">
    <li> Product Name : <xsl:value-of select="productName" /></li>
   <li>Description : <xsl:value-of select="description" /></li>
  <li> Price : <xsl:value-of select="prices/price" /><br/><br/></li>
  

  </xls:if>
  </xsl:for-each>
</ul>
 
<h2> Table 2</h2>

<ul>
<xsl:for-each select="/products/product">
<xls:if  test= "@id = 'acme' ">
    <li> Product Name : <xsl:value-of select="productName" /></li>
   <li>Description : <xsl:value-of select="description" /></li>
     <li> Price : <xsl:value-of select="prices/price" /><br/><br/></li>
  

  </xls:if>
  </xsl:for-each>
</ul>

  </body>
  </html>

</xsl:template>

</xsl:stylesheet>