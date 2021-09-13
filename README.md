# Nowa wersja, v4.4

## Uwagi
- Przez globalne komendy komendy mogą się ładować wolniej. Jeżeli testujesz bota tylko na jednym serwerze, usuń tą część kodu z pliku ready.js (w kategorii: events)

[Zobacz plik](https://github.com/Korrumz2PL/krivebot/blob/slash/events/ready.js)
```js
await rest.put(
    Routes.applicationCommands(clientId),
    { body: commands },
);
```

### Wartości

1. clientId = ID bota
2. guildId = ID serwera