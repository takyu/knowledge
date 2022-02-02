## Back-references of RewriteRule Directive

If you want to retrieve a file from a different directory by matching only the file name, use a Back-references.  
Back-references are identifiers of the form **$N (N=0..9)**, which will be replaced by the contents of the Nth group of the matched Pattern.  
Use () to group the pattern to be matched. The path in () is the one you want to cut out.  
All RewriteRules will be collated, so if you want to stop in the middle (for example, to prevent log redundancy), set the \[L] flag where you want to stop.