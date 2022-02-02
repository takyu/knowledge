for (let i=0; i < 5; i++) {

	// ループ毎に全く異なるメモリ空間に参照を保持している
	const j = i * 2;
	setTimeout(() => {
		console.log(j);
	}, 1000);
}